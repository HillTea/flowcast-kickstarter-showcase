
import Navbar from '@/components/Navbar';
import FeaturedContent from '@/components/FeaturedContent';
import ContentGrid from '@/components/ContentGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <FeaturedContent />
      <ContentGrid />
      <Footer />
    </div>
  );
};

export default Index;
