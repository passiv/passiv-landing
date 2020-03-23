import React from 'react'
import {buildImageObj,cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import Container from './container'

import styles from './page.module.css'

function AboutContent ({  }) {
    return (
     <article className={cn(styles.postPage, styles.About)}>
      <Container>
        <h1 className={styles.postTitle}>About</h1>
        <div className={styles.postContent}>
          <div className={styles.aboutSubLinks}>

            <a data-scroll="our-story" href="#">Our Story</a>
            <a data-scroll="our-mission" href="#">Our Mission</a>
            <a data-scroll="what-is-passiv" href="#">What is Passiv?</a>
            <a data-scroll="passiv-faq" href="#">Passiv FAQ</a>
            <a data-scroll="the-team" href="#">The Team</a>

          </div>

            <h2 id="our-story">Our Story</h2>

            <p>Passiv started when two Brendans met and discovered they were both disillusioned with the status quo of investing: paying high fees for active management of investment products, with nothing to show for it.</p>

            <p>They did the math and realized that those expensive investment products would add years to their working life, because high management expense ratios (MERs) dramatically slowed the growth of their nest eggs.</p>

            <p>From there, they turned to passive investing, a strategy that involves buying and holding index funds that follow the market, rather than actively picking, buying, and selling stocks in an effort to “beat the market”. Since index funds don’t require active management, the management fees are significantly lower - about 10x lower than fees associated with actively managed investments like mutual funds.</p>

            <p>While passive investing takes less time than active investing, the Brendans found there were still tedious aspects to managing your own investments. For instance, whenever new contributions or dividends hit your account, you need to calculate which assets to buy, and how much of them you need to buy to bring your portfolio back to its target allocation. This meant spending hours on manual data entry and endless spreadsheet calculations.</p>

            <p>So Brendan Wood decided to build a tool that freed them from monotonous tasks by automatically calculating the trades needed to keep a portfolio close to its target allocation. They then realized that other investors would benefit from this tool, and Passiv was born.</p>

            <p>Since then, the Passiv team has grown (there’s even a third Brendan!) and hundreds of Canadians are now managing their money with Passiv, saving on management fees and spending less time with Excel. Let Passiv do the same for you.</p>

            <h2 id="our-mission">Our Mission</h2>

            <p>To make passive investing simple for everyday investors who want to save money and time.</p>

            <h2 id="what-is-passiv">What is Passiv?</h2>

            <p>Put simply, <strong>Passiv is software that helps you implement a passive investing strategy</strong> for long-term goals like retirement or saving for your child’s education.</p>

            <p>Note that Passiv is not a robo-advisor - it won’t tell you what you should invest in, so you’ll need to decide that yourself, either through self-education or alongside a financial advisor. Passiv is also not an algorithmic trading platform trying to outperform the market.</p>

            <h3 id="how-can-passiv-help-me">How can Passiv help me?</h3>

            <p>Whether you’re managing one account or your <a href="/blog/seamlessly-manage-your-spouses-account/">entire family’s</a> portfolio, there are some common tasks that need to be done. You need to:</p>

            <ol>
              <li>build and maintain spreadsheets</li>
              <li>calculate how many new shares/units you need to purchase with your contributions</li>
              <li>find time to log in to your brokerage and make the trades</li>
              <li>rebalance each account at least annually</li>
              <li>stick to your investment plan even when markets are on a rollercoaster ride</li>
              <li>adjust your risk tolerance over time</li>
            </ol>

            <p>With each additional account you manage, these tasks multiply and become an even bigger hassle. Passiv helps you manage all of this in a fraction of the time, without the spreadsheets and manual calculations.</p>

            <h3 id="how-does-it-work">How does it work?</h3>

            <p>Passiv’s software communicates with your brokerage account through your brokerage’s official API. This means that Passiv <a href="/security/">never has access</a> to your login credentials.</p>

            <p>You can <a href="/blog/getting-started-passiv/">Get Started With Passiv</a> in a few short steps, detailed in the linked post and summarized here:</p>

            <ol>
              <li>Create a Passiv account.</li>
              <li>Link your brokerage account to Passiv.</li>
              <li>Set a target portfolio for your account(s). If you’d like to add a family member’s account, follow <a href="/blog/seamlessly-manage-your-spouses-account/">these instructions</a>.</li>
              <li>Set up automatically recurring contributions to your broker. This is often referred to as “<a href="https://www.thebalance.com/what-does-pay-yourself-first-mean-453696">paying yourself first</a>”. You’ll be surprised by how much you can save when it’s <a href="https://www.youneedabudget.com/budgeting-tip-give-every-dollar-a-j-o-b/">the first “job”</a> you assign your dollars.</li>
              <li>Sit back and let Passiv do the work.</li>
            </ol>

            <p>Using Passiv frees you from having to create and maintain spreadsheets and needing to calculate where to allocate new contributions and dividends. Passiv emails you when cash hits your accounts so you don’t waste time checking them yourself every day. It also calculates rebalancing trades for you.</p>

            <p><a href="/pricing/">Elite users</a> can save even more time by using the One-Click Trades feature and having Passiv execute the required trades on your behalf. Note that this still requires you to start the process (that’s the One Click in the name) but in the future, you’ll be able to completely automate these trades if you want to. Elite subscribers can also exclude assets - such as individual stock picks - from their target portfolio. All of this is done from one Passiv dashboard for all your accounts - no more logging in to multiple brokerage accounts!</p>

            <h3 id="will-you-develop-passiv-further">Will you develop Passiv further?</h3>

            <p>Yes. Since releasing Passiv in 2017, we’ve already added new features and functionalities as a direct result of our early users’ requests. We also have several new features currently in the works. We built Passiv so that anyone can feel empowered to invest on their own and save more toward retirement. Your feedback helps us help you reach your goals. We’d like to thank everyone who has given us their input and we encourage you to keep sharing your feedback to <a href="mailto:feedback@getpassiv.com">feedback@getpassiv.com</a>.</p>

            <h2 id="passiv-faq">Passiv FAQ</h2>

            <h3 id="what-is-passiv-1">What is Passiv?</h3>

            <p>Passiv is a web app that helps you manage your portfolio and maintain a desired target allocation. It calculates the trades needed based on the target allocation you’ve set and your available cash. <a href="/pricing/">Elite users</a> can save even more time by having Passiv execute trades for you at the click of a button with the One-Click Trades feature.</p>

            <h3 id="who-is-passiv-for">Who is Passiv for?</h3>

            <p>Passiv is for individuals who prefer to manage their own retirement portfolio and are tired of losing money to high management fees. It’s for anyone who wants to automate the tedious parts of portfolio management, like allocating new cash and rebalancing.</p>

            <h3 id="im-american-can-i-use-passiv">I’m American. Can I use Passiv?</h3>

            <p>Yes! We are partnered with <a href="https://alpaca.markets/">Alpaca</a> in the United States and will be rolling out support for more brokerages in the near future.</p>

            <h3 id="does-passiv-store-my-brokerages-login-credentials">Does Passiv store my brokerage’s login credentials?</h3>

            <p>No, Passiv does not ask for or store brokerage login credentials. To link your account to Passiv, Passiv initiates a secure authorization process with your brokerage, where you log in to your brokerage account and are able to grant a secure access token to Passiv. Passiv gets the information it needs through this token. To read more about this process, click <a href="/security/">here</a>.</p>

            <h3 id="what-is-an-api">What is an API?</h3>

            <p>An API is a set of definitions, protocols and tools for building software.  In short, an API makes it possible for Passiv to connect with your brokerage.</p>

            <h3 id="why-do-you-need-trade-access">Why do you need trade access?</h3>

            <p>Trade access is needed if you’d like to use the One-Click Trades feature, where Passiv executes trades on your behalf with the click of one button. If you do not want to use this feature, simply go to Settings and click the Re-authorize button next to Read-Only Access. This removes trading access.</p>

            <h3 id="is-it-possible-to-use-the-other-elite-features-without-giving-passiv-trade-access">Is it possible to use the other Elite features without giving Passiv trade access?</h3>

            <p>Yes, simply go to the Settings page and re-authorize Passiv with Read-only access. This removes trading access.</p>

            <h3 id="is-passiv-a-robo-advisor">Is Passiv a robo-advisor?</h3>

            <p>No, Passiv is a software tool that helps DIY investors determine what trades are needed to allocate new cash and rebalance their portfolios. If you’ve given Passiv trading access, it can also execute the trades on your behalf with just one click.</p>

            <h3 id="will-passiv-recommend-a-portfolio-for-me-to-follow">Will Passiv recommend a portfolio for me to follow?</h3>

            <p>No, you must know which equities you’d like to hold and your target allocation for each. Passiv is not qualified to give investment advice.</p>

            <h3 id="can-i-manage-more-than-one-account">Can I manage more than one account?</h3>

            <p>You can manage as many accounts as you want for one low price. The more accounts you link, <a href="/blog/3-ways-get-most-out-passiv/">the more value</a> you get out of Passiv.</p>

            <h3 id="can-i-manage-someone-elses-accounts">Can I manage someone else’s account(s)?</h3>

            <p>Yes. You can manage your spouse’s or children’s accounts by following the steps <a href="/blog/seamlessly-manage-your-spouses-account/">here</a>.</p>

            <h3 id="what-does-accuracy-mean">What does “accuracy” mean?</h3>

            <p>In short: accuracy tells you how close your current portfolio is to your chosen target portfolio.</p>

            <p>The longer version: When you sign up for Passiv, you create a target portfolio that you want your account to follow. For example, let’s say you want to buy four funds and you want them each to be worth 25% of your total portfolio. Before you actually buy those funds, your investment account has nothing but cash in it, so the accuracy is 0%. When you buy the funds, you buy enough of each so that each one is worth exactly 25% of your portfolio. At this point, your accuracy is 100% because your holdings perfectly match your target.</p>

            <p>However, over time, different funds have different returns and this throws your portfolio off your target allocation. Maybe one fund is now worth 30% of your portfolio and another is worth just 20%, while the other two stayed at 25% each. When this happens, your accuracy percentage will be lower and Passiv will suggest trades to bring your portfolio back in line with your target. By default, Passiv is set to Buy-Only – to see why, read below.</p>

            <h3 id="why-is-passiv-set-to-buy-only-by-default">Why is Passiv set to Buy-Only by default?</h3>

            <p>While you can’t control the stock market, you can control another aspect of investing: how much you pay in fees like trading commissions. Some brokerages, like Questrade, allow you to buy ETFs commission-free, but you pay commission when you sell. Passiv helps you keep more of your money by defaulting to Buy-Only trades, making sure you don’t pay unnecessary trading fees. As long as you’re contributing to your account regularly, you likely won’t need to sell to keep your portfolio in line with your target.</p>

            <h3 id="how-does-the-buy-only-feature-work">How does the Buy-Only feature work?</h3>

            <p>When Buy-Only is active, Passiv will attempt to allocate cash to bring your account closer to 100% accuracy. If there isn’t enough cash to buy anything, no trades will be shown. Passiv determines which assets to purchase by calculating which of your target assets is the most underweight. For example, say you want a bond fund to make up 30% of your portfolio but its returns were lower than those of your stock funds and now it’s only 20% of your portfolio. Passiv will allocate new cash toward buying more of that fund, bringing your portfolio back to your desired allocation. You can choose to turn off Buy-Only on the Settings page at any time.</p>

            <h3 id="what-does-the-exclude-feature-do">What does the “Exclude” feature do?</h3>

            <p>Passiv’s Asset Exclusion feature allows you to exclude specific equities from your target portfolio. Passiv will not factor them in your target portfolio calculations. For example, maybe you generally follow a passive index investing strategy but you also want to put some “fun money” toward individual stock picks. Just leave those individual stock picks out when you set up your target portfolio in Passiv, then click on the toggle bar under Current Portfolio &gt; Exclude to exclude them from future calculations.</p>

            <h2 id="the-team">The Team</h2>

            <h3 id="mike-cousins">Mike Cousins</h3>

            <p>Mike has a dream. He wants people to be able to save for retirement easily and well. Investing knowledge is hard to come by, fees are high, and the experience is bad. He’s going to fix this.</p>

            <p>He is a developer from Calgary, a father, really tall, and enjoys volleyball, hockey, and skiing.</p>

            <h3 id="kirsten-dodd">Kirsten Dodd</h3>

            <p>Kirsten has lived in cities across North America, always finding new sources of creativity and innovation in each. A live music goer, a world traveler, and above all a dog lover.</p>

            <p>A unicorn Web Designer and Developer with a heavy focus on user experience, utilizing the science behind behavioral design to build sleek digital experiences.  She’s new to investing and her goal is to make it feel less intimidating for others.</p>

            <h3 id="brendan-kam">Brendan Kam</h3>

            <p>A few months after turning 17, Brendan decided he wanted to travel. He packed up, got on a plane, traveled halfway round the world and ended up in a little town called Fredericton.  A decade passed and he’s still here.</p>

            <p>Brendan started learning about personal finance around the same time he started learning to code. Coincidentally, he’s now a developer for a company that helps people with their personal finance, working alongside two other Brendans. He still finds this coincidence amusing.</p>

            <h3 id="ena-musić">Ena Musić</h3>

            <p>A few years ago, Ena was frustrated that she knew nothing about investing, so she read books and blogs until she finally felt comfortable calling herself “an investor”. With Passiv, she hopes to show all Canadians that investing is not as intimidating as Wall St and Bay St want you to think.</p>

            <p>After a four-year stint in the Land Down Under, Ena has nearly reacclimatized to Toronto weather. She spends her spare time exploring all the cafes that opened while she was gone.</p>

            <h3 id="brendan-lee-young">Brendan Lee Young</h3>

            <p>Originally from Trinidad and Tobago, a small Caribbean island. Brendan considers himself a value investor and is huge fan of Warren Buffet. He believes that if you can’t beat the market, then you may as well buy it.</p>

            <p>Brendan is passionate about helping others and spending time with family and friends. His interests include traveling, beaches, cooking, soccer, video-games, music, DJ-ing, reading, and investing of course!</p>

            <h3 id="brendan-wood">Brendan Wood</h3>

            <p>Brendan grew up on the rugged shores of Newfoundland and moved to New Brunswick for the canoeing. He’s a father of two with a drive for building and fixing.</p>

            <p>Brendan is a passive investor who diversifies across index fund ETFs, real estate, and cryptocurrency. In his little spare time, Brendan enjoys tossing his kids around, cycling, and spending time with friends and family.</p>
          </div>
        </Container>
      </article>
  )
}

export default AboutContent
