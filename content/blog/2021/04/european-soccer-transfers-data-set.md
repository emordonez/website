---
title: 'European soccer transfers data set'
permalink: 'european-soccer-transfers-data-set'
description: "I web scraped over 134,000 European soccer transfers from Transfermarkt, spanning 28 seasons and 10 leagues. Here is a first look at what I did and what I think the data's potential is."
date: 2021-04-16
image: '2021/04/ronaldo-header-sampdoria.jpg'
tags: ['soccer']
katex: false
---

This data set comprises 134,437 transfer movements web scraped from [Transfermarkt](https://www.transfermarkt.com/), covering each transfer window in the 1992/93&ndash;2020/21 seasons for the following leagues:

1. English Premier League
2. Spanish Primera División (La Liga)
3. German Bundesliga
4. Italian Serie A
5. French Ligue 1
6. Portuguese Primeira Liga
7. Dutch Eredivisie
8. Russian Premier Liga
9. Belgian Jupiler Pro League
10. Scottish Premiership

See the source code and preview the data on [GitHub](https://github.com/emordonez/transfermarkt-transfers), or [download the data set directly via DownGit](https://downgit.github.io/#/home?url=https://github.com/emordonez/transfermarkt-transfers/tree/master/data).

## What is a transfer?

The most obvious difference between the North American and European sports landscapes is that soccer reigns king in Europe.
But even between soccer here and there, the sport is replete with structural differences that have competitive and financial implications.

One of the most significant differences is how players can move between clubs.
In the MLS, like in the other sports leagues of the US and Canada, two clubs can trade players in a straight swap.
In Europe, clubs can transfer a player by buying/selling the player's rights from/to other clubs.

Both actions involve two clubs exchanging the rights to register a player, but a trade is more akin to a barter.
The clubs trade one asset for another as is, since a club takes on a traded player's contract as well as his rights.

A transfer is more akin to a market sale.
Since a player must break his contract with his current club before registering with a new one, the two clubs can negotiate a transfer fee in compensation.
In this way, clubs essentially buy and sell players as assets whose prices are influenced by supply, demand, and willingness to buy and sell.

## My interest in the transfer market

Soccer is my favorite sport, and as an economics graduate I naturally see the transfer market through this lens.
Record transfers help illustrate textbook economic phenomena.
For example, we see evidence of [demand-pull inflation](https://en.wikipedia.org/wiki/Demand-pull_inflation) from Neymar's record-smashing transfer to PSG for €222 million: _"Too much money spent chasing too few goods."_

Transfers are one of the most discussed and debated talking points among fans, so countless theories arise about trends in transfer spending and what constitutes good business.
I'm interested in how an economic analysis can support or debunk some of the most popular assumptions about the transfer market.

To do so, I need as much transfer data as I can find.

### Web scraping with Python

Transfer rumors and deadline-day movements generate loads of worldwide coverage, so there's no shortage of information on past and current transfers.
In my experience, no source compares to the breadth and depth of Transfermarkt.

Transfermarkt is a German-based website that has compiled soccer scores, results, statistics, transfer news, fixtures, and more since 2000.
It's a treasure trove for soccer data across the major leagues worldwide.

It currently offers no public API to query and download its data, but everything is laid out in predictable and easily parsed HTML tables.
This made web scraping the simplest solution.

I've web scraped with Python using Beautiful Soup before, and navigating Transfermarkt's document structure was straightforward.
I'd like to acknowledge [Ryo Nakagawara's](https://ryo-n7.github.io/2020-05-14-webscrape-soccer-data-with-R/) and [Ewen Henderson's](https://ewen.io/2018/08/27/building-open-football-player-transfer-data/) web scraping with R as a guide. (Stumbling upon [Ewen's open data set on GitHub](https://github.com/ewenme/transfers) is what inspired me to try this myself).

Here's a sample of what I can pull from one season's transfer activity:

<div class="table-wrapper">

| club       | name                 | age | nationality | position           | short_pos | market_value | dealing_club    | dealing_country | fee           | movement | window | league         | season |
|------------|----------------------|-----|-------------|--------------------|-----------|--------------|-----------------|-----------------|---------------|----------|--------|----------------|--------|
| Arsenal FC | Thomas Partey        | 27  | Ghana       | Defensive Midfield | DM        | €40.00m      | Atlético Madrid | Spain           | €50.00m       | in       | summer | premier-league | 2020   |
| Arsenal FC | Gabriel              | 22  | Brazil      | Centre-Back        | CB        | €20.00m      | LOSC Lille      | France          | €26.00m       | in       | summer | premier-league | 2020   |
| Arsenal FC | Pablo Marí           | 26  | Spain       | Centre-Back        | CB        | €4.80m       | Flamengo        | Brazil          | €5.00m        | in       | summer | premier-league | 2020   |
| Arsenal FC | Rúnar Alex Rúnarsson | 25  | Iceland     | Goalkeeper         | GK        | €1.20m       | Dijon           | France          | €2.00m        | in       | summer | premier-league | 2020   |
| Arsenal FC | Cédric Soares        | 28  | Portugal    | Right-Back         | RB        | €8.00m       | Southampton     | England         | free transfer | in       | summer | premier-league | 2020   |

</div>

### Limitations to the data

As comprehensive and reliable Transfermarkt has proven to be, it isn't complete nor infallible.
Naturally there are missing records, and out of 134,437 records in my scraped data the nonzero null counts are:

- `age` = 41
- `nationality` = 28
- `position` = `short_pos` = 3
- `market_value` = 51,499
- `dealing_country` = 7,306
- `fee` = 34,629

The most glaring are `market_value`, `dealing_country`, and `fee`.

Market value is Transfermarkt's internal valuation based on community estimates, so market values are generally more available in higher rated leagues and as time goes on.

Fees are unknown if they're undisclosed or not reported, and not applicable for certain kinds of player movement like retirements and bans.
In the latter case, I set the dealing country to be empty (the type of movement is recorded elsewhere).

All in all, I'm pleased with the quality and quantity of what I was able to scrape.
I will likely have to account for sparsity in smaller leagues' data and in data from earlier seasons, but the data from the league I'm most interested in (the Premier League) are essentially complete.

## Topics to investigate

I've scraped and cleaned the data, and now I have some inquiries that many soccer fans (including myself) assume to be true but that I believe this data set can illuminate:

- **Is interleague inequality growing faster than intraleague inequality?** A handful of clubs dominate European soccer, evidenced both by the number of titles won and by their ever increasing transfer spending. But some leagues, particularly the Premier League and the Bundesliga, are getting richer faster than other leagues due to lucrative TV deals. Now even teams at the bottom of the Premier League can outspend top teams from France, Spain, and Italy. How is this inequality in spending distributed?
- **Are attackers valued more than defenders?** Only three defenders have ever won the Ballon d'Or, the annual award for European and global soccer's best player given since 1958. Defenders today can command astronomical prices (like Harry Maguire's £80 million move to Manchester United), but how do those prices compare to attackers who receive all the media attention?
- **Is there a premium paid for English players in the Premier League?** The Premier League's Homegrown Player Rule states that at least eight of a team's 25 players must have been trained in England for at least three years before turning 21. The motivation is to nurture domestic talent for the national team, but an unintended consequence may be that English player prices are inflating to meet this demand.
- **Does transfer spending correlate with success? Does it cause it?** This is what fans most want to know for their own club. Winning requires great players, and great players cost money; ergo, higher spending should predict more success (or so the thinking goes). But are the top teams big spenders because they win, or do they get to the top by spending the most?

<horizontal-rule></horizontal-rule>

I hope this data set can help anyone else interested in soccer and the economics of the transfer market.
If you notice anything awry or have ideas to contribute, please feel free to open an issue in the project repo!
