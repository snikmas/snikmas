import type { Metadata } from 'next'
import { ArticleLayout } from '@/components/site/article-layout'
import { posts } from '@/components/site/data'

const post = posts[0]

export const metadata: Metadata = {
  title: `${post.title} — Mary (snikmas)`,
  description: post.excerpt,
}

export default function AiHypeThoughtsPost() {
  return (
    <ArticleLayout
      title={post.title}
      date={post.date}
      category={post.category}
      readingTime={post.readingTime}
    >
      <p>
        The AI hype is hard to miss—and so is the pressure around it. New models
        and tools appear constantly, sometimes several in a single week: Grok,
        GPT, Kimi, and others. Do you remember weeks like that?
      </p>

      <p>
        I’ve been watching this hype play out, especially among programmers on
        Twitter and YouTube, where so much of the content seems to be about new
        models, becoming more productive, and how to automate more and more.
      </p>

      <p>
        Somewhere along the way, trying them started to feel less like curiosity
        and more like an obligation: “I’m not doing enough. What if AI replaces
        me? My limits reset, so I guess I’ll go to bed later and push even
        harder.” You know what I mean.
      </p>

      <p>
        I understand where this pressure comes from. But most of the time, I
        still feel out of step with it, and it makes me wonder whether I’m simply
        not part of that world. Maybe I’m doing something wrong. Maybe I’m
        missing something.
      </p>

      <p>
        Today, one of the programmers I respect, Michael Paulson (ThePrimeagen),
        talked about this in a video and shared a post written by George Hotz:
      </p>

      <blockquote>
        “What I don’t like is two things. One, this constant bullshit about some
        window closing, or the perpetual underclass, or falling hopelessly
        behind. This is negative valence hype, not only is it not true, it’s
        mostly designed to make you feel bad about yourself...”
      </blockquote>

      <p>
        I really like this post because it captures what the AI hype feels like
        right now. Why are people speaking out about it? Well, probably because
        they’ve felt that pressure themselves.
      </p>

      <p>But the idea that you’re hopelessly falling behind isn’t true.</p>

      <p>
        I personally enjoy programming and learning things that genuinely
        interest me, and I prefer to really learn them—to play with them for a
        few weeks, understand them, and get used to them—instead of trying
        something once and immediately jumping to the next thing. But as much as
        I enjoy all of this, my health, exercise, sleep, nutrition, relationships,
        and mental well-being matter more to me.
      </p>

      <p>
        Some of the things I learn might be considered “useless.” Recently, I
        started learning Lua because I want to try making a game—just for fun,
        writing the code myself. No AI, no automation—nah 🥱
      </p>

      <p>
        Sometimes, I feel the same pressure on LinkedIn. I open my feed and see
        post after post about how to become more productive, why I’m doing
        everything wrong, and why I need to work even harder.
      </p>

      <p>Well... learning is good. And pushing yourself can be good too.</p>

      <p>
        But when all that advice starts affecting your health, disturbing your
        sleep, or making you feel that you’re never doing enough, it stops being
        useful. At that point, it’s just noise.
      </p>

      <div className="article-ending">
        <p>Learn what you want to learn.</p>
        <p>Build what you want to build.</p>
        <p>Keep your own pace and enjoy the process.</p>
      </div>

      <p>That’s it.</p>

      <p className="article-source">
        The quoted passage is from George Hotz’s{' '}
        <a href="https://geohot.github.io/blog/jekyll/update/2026/07/12/i-love-llms.html">
          “I love LLMs, I hate hype”
        </a>
        .
      </p>
    </ArticleLayout>
  )
}
