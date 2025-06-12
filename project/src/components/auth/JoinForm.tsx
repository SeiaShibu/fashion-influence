import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import Button from '../ui/Button';
import { UserPlus, Upload } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const JoinForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    bio: '',
    profileImage: null as File | null,
    coverImage: null as File | null,
  });

  const uploadImage = async (file: File, path: string) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'cover') => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [type === 'profile' ? 'profileImage' : 'coverImage']: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload images if provided
      const profileImageUrl = formData.profileImage 
        ? await uploadImage(formData.profileImage, 'profile-images')
        : null;
      
      const coverImageUrl = formData.coverImage
        ? await uploadImage(formData.coverImage, 'cover-images')
        : null;

      // Create profile in database
      const { error } = await supabase
        .from('profiles')
        .insert({
          id: uuidv4(),
          username: formData.username,
          full_name: formData.fullName,
          bio: formData.bio,
          profile_image_url: profileImageUrl,
          cover_image_url: coverImageUrl,
        });

      if (error) throw error;

      // Navigate to profile page
      navigate(`/profile/${formData.username}`);
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('Error creating profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Join TrendSetter</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            className="input"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            placeholder="Choose a unique username"
          />
        </div>

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            required
            className="input"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
            Bio
          </label>
          <textarea
            id="bio"
            rows={3}
            className="input"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Tell us about yourself and your fashion style"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, 'profile')}
              className="hidden"
              id="profile-image"
            />
            <label htmlFor="profile-image">
              <Button
                type="button"
                variant="outline"
                fullWidth
                leftIcon={<Upload size={16} />}
                className="cursor-pointer"
              >
                {formData.profileImage ? 'Image Selected' : 'Upload Profile Image'}
              </Button>
            </label>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, 'cover')}
              className="hidden"
              id="cover-image"
            />
            <label htmlFor="cover-image">
              <Button
                type="button"
                variant="outline"
                fullWidth
                leftIcon={<Upload size={16} />}
                className="cursor-pointer"
              >
                {formData.coverImage ? 'Image Selected' : 'Upload Cover Image'}
              </Button>
            </label>
          </div>
        </div>

        <Button
          type="submit"
          fullWidth
          size="lg"
          leftIcon={<UserPlus size={18} />}
          isLoading={loading}
        >
          Create Profile
        </Button>
      </form>
    </div>
  );
};

export default JoinForm;