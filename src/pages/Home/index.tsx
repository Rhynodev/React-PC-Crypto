import CommonPage from '../../components/pages/CommonPage';
import HeroSection from './components/HeroSection';
import CurrencySection from './components/CurrencySection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TradeSection from './components/TradeSection';
import TradingPlatformSection from './components/TradingPlatformSection';
import OverSuccessSection from './components/OverSuccessSection';
import TradingStepsSection from './components/TradingStepsSection';

const MarketPage: React.FC = () => {
    return (
    <CommonPage>
      <HeroSection />
      <CurrencySection />
      <OverSuccessSection />
      <TradingPlatformSection />
      <WhyChooseUsSection />
      <TradingStepsSection />
      <TestimonialsSection />
      <TradeSection />
    </CommonPage>
    );
};
export default MarketPage;
