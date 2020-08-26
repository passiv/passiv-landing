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
            <a data-scroll="our-story" href="#our-story">Our Story</a>
            <a data-scroll="our-mission" href="#our-mission">Our Mission</a>
            <a data-scroll="what-is-passiv" href="#what-is-passiv">What is Passiv?</a>
            <a data-scroll="passiv-faq" href="#passiv-faq">Passiv FAQ</a>
          </div>
          <h2 id="our-story">Our Story</h2>
          <p>Passiv started when our founders, <a href="https://ca.linkedin.com/in/brendanleeyoung" target="_blank" rel="noopener noreferrer">Brendan Lee Young</a> and <a href="https://ca.linkedin.com/in/brendancalebwood" target="_blank" rel="noopener noreferrer">Brendan Wood</a>, met and discovered they were both disillusioned with the status quo of investing: paying high fees for active management of investment products, with nothing to show for it.</p>
          <p>They did the math and realized that those expensive investment products would add years to their working life, because high management expense ratios (MERs) dramatically slowed the growth of their nest eggs.</p>
          <p>From there, they turned to passive investing, a strategy that involves buying and holding index funds that follow the market, rather than actively picking, buying, and selling stocks in an effort to “beat the market”. Since index funds don’t require active management, the management fees are significantly lower - about 10x lower than fees associated with actively managed investments like mutual funds.</p>
          <p>While passive investing takes less time than active investing, the Brendans found there were still tedious aspects to managing your own investments. For instance, whenever new contributions or dividends hit your account, you need to calculate which assets to buy, and how much of them you need to buy to bring your portfolio back to its target allocation. This meant spending hours on manual data entry and endless spreadsheet calculations.</p>
          <p>So Brendan Wood decided to build a tool that freed them from monotonous tasks by automatically calculating the trades needed to keep a portfolio close to its target allocation. They then realized that other investors would benefit from this tool, and Passiv was born.</p>
          <p>Since then, the Passiv team has grown (there’s even a third Brendan!) and hundreds of Canadians are now managing their money with Passiv, saving on management fees and spending less time with Excel. Let Passiv do the same for you.</p>
          <h2 id="our-mission">Our Mission</h2>
          <p>To make passive investing simple for everyday investors who want to save money and time.</p>
          <h2 id="what-is-passiv">What is Passiv?</h2>
          <p>Passiv is a portfolio management tool that makes it easier for DIY investors to maintain a balanced portfolio and build a passive investment strategy at their online broker. It eliminates the need to use spreadsheets, saves you from having to log into your broker to place trades and helps you stick to your portfolio’s target allocation. With Passiv, users can be their household’s wealth manager.</p>
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
          <p><a href="/pricing/">Elite users</a> can save even more time by using the One-Click Trades feature and having Passiv execute the required trades on your behalf. Note that this still requires you to start the process (that’s the One Click in the name). Elite subscribers can also access other <a href="/pricing/">features</a>.
All of this is done from one Passiv dashboard for all your accounts - no more logging in to multiple brokerage accounts!</p>
          <h2 id="passiv-faq">Passiv FAQ</h2>
          <h3 id="what-is-passiv-1">What is Passiv?</h3>
          <p>Passiv is a web app that helps you manage your portfolio and maintain a desired target allocation. It calculates the trades needed based on the target allocation you’ve set and your available cash. <a href="/pricing/">Elite users</a> can save even more time by having Passiv execute trades for you at the click of a button with the One-Click Trades feature.</p>
          <h3 id="who-is-passiv-for">Who is Passiv for?</h3>
          <p>Passiv is for individuals who prefer to manage their own retirement portfolio and are tired of losing money to high management fees. It’s for anyone who wants to automate the tedious parts of portfolio management, like allocating new cash and rebalancing.</p>
          <h3 id="im-american-can-i-use-passiv">What brokerages does Passiv support?</h3>

          <p>Passiv supports Interactive Brokers (available internationally), TD Ameritrade, Questrade, and Alpaca. In Canada, Passiv is excusively partnered with Questrade. We are planning to roll out support for more brokerages in the near future.</p>

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

          <p>While you can’t control the stock market, you can control another aspect of investing: how much you pay in fees like trading commissions. Some brokerages allow you to buy ETFs commission-free, but you pay commission when you sell. Passiv helps you keep more of your money by defaulting to Buy-Only trades, making sure you don’t pay unnecessary trading fees. As long as you’re contributing to your account regularly, you likely won’t need to sell to keep your portfolio in line with your target. For more information on Passiv’s features, read our <a href="https://passiv.com/tutorials/">tutorials</a>.</p>

        </div>
      </Container>
    </article>
  )
}

export default AboutContent
