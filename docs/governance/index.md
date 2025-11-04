<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const aq = {
  avatar: 'https://avatars.githubusercontent.com/u/171161076',
  name: 'Joe',
  desc: '@AQ',
  title: 'President',
  links: [
    { icon: 'github', link: 'https://github.com/AQ00111111' },
  ]
};

const coolguy = {
  avatar: 'https://avatars.githubusercontent.com/u/12205727',
  name: 'Ralph',
  desc: '@Coolguy3289',
  title: 'Treasurer',
  links: [
    { icon: 'github', link: 'https://github.com/Coolguy3289' },
  ]
};

const ben = {
  avatar: 'https://avatars.githubusercontent.com/u/12856904',
  name: 'Ben',
  desc: '@ben221199',
  title: 'Chief Technical Officer (CTO)',
  links: [
    { icon: 'github', link: 'https://github.com/ben221199' },
    { icon: 'reddit', link: 'https://reddit.com/u/ben221199' },
    { icon: 'x', link: 'https://x.com/ben221199' }
  ]
};

const shroom = {
  avatar: 'https://avatars.githubusercontent.com/u/68300730',
  name: '',
  desc: '@Shroom',
  title: 'Secretary',
  links: [
    { icon: 'github', link: 'https://github.com/ezShroom' },
    { icon: 'x', link: 'https://x.com/ezShroom' }
  ]
};

const pigges = {
  avatar: 'https://avatars.githubusercontent.com/u/54172787',
  name: 'Philip',
  desc: '@Pigges',
  title: 'Technical Officer',
  links: [
    { icon: 'github', link: 'https://github.com/Pigges' },
    { icon: 'x', link: 'https://x.com/pigges117' }
  ]
};

const members = [
  aq,
  coolguy,
  ben,
  shroom,
  pigges,
];
</script>

# Foundation Board
The LBRY Foundation is a US-based non-profit organization governed by a board of directors formed by members of the community. <!--  The Foundation currently has five board members and board members serve a three year term but can be re-elected. -->
<!-- TODO probably add more about the governance here -->

## Board of Directors

<VPTeamMembers :members="members" size="small" />

<!-- ## Board Elections
The first board election was the December 2019 Board Election, won by Jon Ringo.
The second board election was the December 2020 Board Election, won by Ralph Streb and Leo Rodrigues.
The third board election was December 2021, won by Shroom.
In the December 2022 board election, Pigges and Aryan both won as they were the only two candidates standing for the two board positions so they were both automatically elected.
 TODO more info? -->

<!-- ## Future Structure
The Foundation is expected to integrate network organization principles through 2020.
The intent is to decentralize decision making and management powers throughout the LBRY network and community as they develop.
 TODO more info? -->
