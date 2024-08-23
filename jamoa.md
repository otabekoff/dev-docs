---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  // size: "small",
  {
    avatar: 'https://www.github.com/otabekoff.png',
    name: 'Otabek Sadiridinov',
    title: 'Loyiha muallifi',
    // org: "Perfectly.dev",
    // orgLink: "",
    desc: "G'oya va loyiha muallifi. Asosiy dasturchi va qo'llanma yozuvchisi.",
    // sponsor?: string,
    //  actionText?: string // sponsor text 
    links: [
      { icon: 'github', link: 'https://github.com/otabekoff' },
      // { icon: 'discord', link: "", },
      // { icon: 'facebook', link: "", },
      // { icon: 'github', link: "", },
      // { icon: 'instagram', link: "", },
      // { icon: 'linkedin', link: "", },
      // { icon: 'mastodon', link: "", },
      // { icon: 'npm', link: "", },
      // { icon: 'slack', link: "", },
      // { icon: 'twitter', link: "", },
      // { icon: 'x', link: "", },
      // { icon: 'youtube', link: "", },
        // { svg: string },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: '...',
      //   // You can include a custom label for accessibility too (optional but recommended):
      //   ariaLabel: 'cool link'
      // }
    ]
  }
]
// const staff = [
//   {
//     avatar: 'https://www.github.com/yyx990803.png',
//     name: 'Evan You',
//     title: 'Creator',
//     links: [
//       { icon: 'github', link: 'https://github.com/yyx990803' },
//       { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
//     ]
//   }
// ]
// const members = [
//   {
//     avatar: 'https://www.github.com/yyx990803.png',
//     name: 'Evan You',
//     title: 'Creator',
//     links: [
//       { icon: 'github', link: 'https://github.com/yyx990803' },
//       { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
//     ]
//   }
// ]
// const partners = [
//   {
//     avatar: 'https://www.github.com/yyx990803.png',
//     name: 'Evan You',
//     title: 'Creator',
//     links: [
//       { icon: 'github', link: 'https://github.com/otabekoff' },
//       { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
//     ]
//   },
// ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Bizning jamoamiz
    </template>
    <template #lead>
      <b>Dev docs</b> loyihasini ishlab chiqish jarayonida ko'plab insonlar ishtirok etadilar. Ularni jamoamiz a'zolari deb ataymiz.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="medium"
    :members="coreMembers"
  />

  <!-- <VPTeamPageSection>
    <template #title>Xodimlar</template>
    <template #lead>Loyihaning asosini ishlab chiqishda yordamlashuvchi insonlar.</template>
    <template #members>
      <VPTeamMembers size="small" :members="staff" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>A'zolar</template>
    <template #lead>Loyihani ishlab chiqish jarayonida ko'p va yirik o'zgarishlar qiluvchi insonlar.</template>
    <template #members>
      <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Hamkorlar</template>
    <template #lead>Loyihani ishlab chiqishda asosan moddiy tomonlama ko'maklashuvchilar</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection> -->
</VPTeamPage>

<div align="center" style="margin:0px 0px 120px 0px;font-weight:500">
Loyihaga o'z hissangizni qo'shishni istaysizmi?<br>
Biz ham sizni shu yerda ko'rishni istaymiz.
<a href="/hamkorlik">Hamkorlik haqida</a>
</div>
