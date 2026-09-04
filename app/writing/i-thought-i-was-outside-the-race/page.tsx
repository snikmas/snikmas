import type { Metadata } from 'next'
import { ArticleLayout } from '@/components/site/article-layout'
import { posts, siteUrl } from '@/components/site/data'

const post = posts.find(({ slug }) => slug === 'i-thought-i-was-outside-the-race')!
const englishPath = `/writing/${post.slug}`
const chinesePath = `/zh/writing/${post.slug}`
const englishUrl = `${siteUrl}${englishPath}/`
const chineseUrl = `${siteUrl}${chinesePath}/`

export const metadata: Metadata = {
  title: `${post.title.en} | Mary (snikmas)`,
  description: post.excerpt.en,
  alternates: {
    canonical: englishUrl,
    languages: {
      en: englishUrl,
      'zh-CN': chineseUrl,
    },
  },
}

export default function OutsideTheRacePost() {
  return (
    <ArticleLayout
      locale="en"
      title={post.title.en}
      date={post.date}
      dateTime={post.dateTime}
      category={post.category.en}
      readingTime={post.readingTime.en}
      alternateHref={chinesePath}
    >
      <p>
        I don&apos;t spend much time on Twitter, but I kept noticing a strange
        idea in posts about San Francisco. The future is there, and it is moving
        faster and faster. The window into that future is always closing. And if
        you are somewhere else... well, probably you are already late.
      </p>

      <p>
        Then I read George Hotz&apos;s post,{' '}
        <a href="https://geohot.github.io/blog/jekyll/update/2026/07/12/i-love-llms.html">
          I love LLMs, I hate hype
        </a>
        . He called it &quot;negative valence hype.&quot; I read that and thought:
        okay, I was right about it. I&apos;m not part of that SF bubble. I
        couldn&apos;t do much about it from China anyway, and actually, I don&apos;t
        need to. Okay, cool. This particular panic does not bother me.
      </p>

      <p>well... apparently, not really.</p>

      <p>
        China has a word for its own kind of pressure: 卷, <em>juǎn</em>. It is
        what happens when everyone works harder and harder, but nobody gets
        ahead because the standard keeps rising. Everyone knows the word. Many
        people cannot simply escape the competition. They need jobs, and not
        everyone has enough money or other options to slow down. But even people
        who do have some choice often seem to accept 卷 as a fact of life.
      </p>

      <p>
        As a foreigner here, I thought I could watch it from the side. I do not
        follow exactly the same path as Chinese students, so perhaps I could
        notice the race without being pulled into it. I would just do what I
        needed to do and keep my own pace. That sounded reasonable.
      </p>

      <p>
        Then I went to Shenzhen for a hackathon. Shenzhen felt a little like a
        Chinese San Francisco to me. I met teammates around my age who were
        already involved in many tech activities and seemed much closer to the
        newest things happening in the industry. They had ambitions, but they
        were also in a place that could answer those ambitions. I remember
        thinking: there are so many opportunities here. You only have to go
        outside, and somehow they can find you. I loved that feeling. I would
        like to work there in the future.
      </p>

      <p>
        Then Cinderella went home to Zhengzhou. Cinderella was me, yep. Suddenly
        my ordinary life there felt like nothing was happening. I was wasting
        time. I did not have the right city or the right circle, so I had to work
        more and move faster to compensate. Nobody in Zhengzhou was directly
        competing with me. It did not matter. That atmosphere had already
        followed me home.
      </p>

      <p>
        That was the strange part I had not noticed before. I saw 卷 as a problem
        other people had. In the end, I had absorbed it too. Apparently you do
        not need to be in the same competition for its pressure to affect you.
        Maybe that is why the race is so easy to miss. We say, &quot;this is 卷,&quot;
        as if naming it explains everything. It becomes something the
        environment does to us, and we assume we have to keep going because
        everyone else is already running.
      </p>

      <p>
        So... don&apos;t run this race only because everyone else is running. If
        you want to run, okay, run it. Just make sure the goal is yours and run
        it at your own pace. If you can&apos;t answer what you&apos;re doing it for,
        well, that&apos;s a good reason to stop for a minute and think about it.
      </p>
    </ArticleLayout>
  )
}
