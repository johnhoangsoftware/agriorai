import Image from '@/components/ui/image';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useIsDarkMode } from '@/lib/hooks/use-is-dark-mode';
import lightLogo from '@/assets/images/logo2.png';
import darkLogo from '@/assets/images/logo2.png';

const Logo: React.FC<React.SVGAttributes<{}>> = (props) => {
  const isMounted = useIsMounted();
  const { isDarkMode } = useIsDarkMode();

  return (
    <div className="flex cursor-pointer outline-none " {...props}>
      <span className="relative flex overflow-hidden">
        {isMounted && isDarkMode && (
          <Image src={darkLogo} alt="Criptic" priority width={50} />
        )}
        {isMounted && !isDarkMode && (
          <Image src={lightLogo} alt="Criptic" priority width={50} />
        )}
      </span>
    </div>
  );
};

export default Logo;
