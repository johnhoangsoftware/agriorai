import routes from '@/config/routes';
import { HomeIcon } from '@/components/icons/home';
import { FarmIcon } from '@/components/icons/farm';
import { Marketplace } from '@/components/icons/marketplace';
import { ProfileIcon } from '@/components/icons/profile';
import { DiskIcon } from '@/components/icons/disk';
import { WithdrawalIcon } from '@/components/icons/withdrawal';
import { VoteIcon } from '@/components/icons/vote-icon';
import { PlusCircle } from '@/components/icons/plus-circle';
import { CompassIcon } from '@/components/icons/compass';
import { CheckIn } from '@/components/icons/check-in';

export const menuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href: routes.home,
  },
  {
    name: 'Check-in',
    icon: <CheckIn />,
    href: routes.checkin,
  },
  {
    name: 'Marketplace',
    icon: <Marketplace />,
    href: routes.marketplace,
  },
  /* {
    name: 'Farm',
    icon: <FarmIcon />,
    href: routes.farms,
  }, */
  {
    name: 'Withdrawal',
    icon: <WithdrawalIcon />,
    href: routes.withdrawal,
  },
  {
    name: 'Farmer Tool',
    icon: <CompassIcon />,
    href: routes.search,
    dropdownItems: [
      {
        name: 'Create Products',
        icon: <PlusCircle />,
        href: routes.createNft,
      },
      {
        name: 'AI Tools',
        icon: <DiskIcon />,
        href: routes.aiTool,
      },
    ],
  },
  {
    name: 'Profile',
    icon: <ProfileIcon />,
    href: routes.profile,
  },
  /* {
    name: 'Vote',
    icon: <VoteIcon />,
    href: routes.vote,
    dropdownItems: [
      {
        name: 'Explore',
        href: routes.vote,
      },
      {
        name: 'Vote with pools',
        href: routes.proposals,
      },
      {
        name: 'Create proposal',
        href: routes.createProposal,
      },
    ],
  }, */
];
