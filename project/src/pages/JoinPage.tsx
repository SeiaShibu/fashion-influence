import Layout from '../components/layout/Layout';
import JoinForm from '../components/auth/JoinForm';

const JoinPage = () => {
  return (
    <Layout hideFooter>
      <div className="min-h-screen bg-gray-50 py-12">
        <JoinForm />
      </div>
    </Layout>
  );
};

export default JoinPage;