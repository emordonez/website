---
title: 'Sample visualizations of European soccer transfers'
description: "These visualizations help illustrate trends and interesting observations in Premier League and European transfer spending."
date: 2021-04-28
image: ''
tags: ['soccer', 'R']
katex: false
---

In a [previous post](https://ericmordonez.com/blog/european-soccer-transfer-data-set) I talked about a new data set of European soccer transfers.
In this post I'll showcase sample visualizations of the data created with R and ggplot2, and I'll touch upon some of the insights they help illustrate.

You can see the source code in [this gist](https://gist.github.com/emordonez/5fe7d760ceba4aa0c930ca6496ba1b42).

## Premier League spending in the 2020/21 season

Despite the delayed start to the season due to COVID, business in the transfer market proceeded as usual with Chelsea and Manchester City leading the league in spending by a significant margin.
Total league spending is down from last season's £1.79b, and the lack of gate receipts due to limited attendances is a likely reason that clubs were unable or unwilling to spend more.

Interestingly, Chelsea's league-leading expenditure brought in just five players:

- Kai Havertz for £69.6m
- Timo Werner for £46.1m
- Ben Chilwell for £43.7m
- Hakim Ziyech for £34.8m
- Éduoard Mendy for £20.9m

<v-img src="2021/04/transfers-1-1.png"></v-img>

But the Premier League is still clearly a buying league.
No club sold players for more money than they spent to buy them.

<v-img src="2021/04/transfers-1-2.png"></v-img>

## The past decade of Premier League spending

Chelsea and Manchester City splashing the cash is not a new thing.
Together with Manchester United, Liverpool, Arsenal, and Tottenham, these Big Six clubs annually make up the bulk of Premier League spending.

However, total expenditures are increasing across the league, and the gap between the Big Six and the rest is shrinking.
More money is flowing into the league through lucrative broadcasting deals and ambitious owners like those of Leicester City, Aston Villa, and Wolverhampton Wanderers.

<v-img src="2021/04/transfers-2-1.png"></v-img>

The three biggest spenders are indeed the three most successful clubs.
A reasonable assumption among fans and pundits is that clubs can't win without quality players, which will invariably cost lots of money.

<v-img src="2021/04/transfers-2-2.png"></v-img>

But the numbers don't always align with each club's success.
Manchester United's spending spiked after Sir Alex Ferguson retired in 2013, and they haven't won the league since then.
Tottenham made Premier League history in 2018 by being the first club to not sign any new players in a season, yet they made it to the Champions League final that year.

What these numbers alone can't reveal is whether a player was worth his transfer fee.
Kepa at Chelsea (£69.6m, 2018) and Nicolas Pépé at Arsenal (£69.6m, 2019) are two examples of big money spent without the on-pitch production so far to justify it.

## The most expensive European transfers

English clubs collectively spend a massive amount, but the biggest player purchases are made by continental clubs.
A French club and Spanish clubs top the list of most expensive European transfers.

<v-img src="2021/04/transfers-3-1.png"></v-img>

We can see a couple things straight away.

First, Neymar's transfer to PSG is an outlier that warped the market.
Coutinho and Dembélé were likely not sold to Barcelona for fair market prices.
Liverpool and Dortmund knew Barcelona were desperate to replace Neymar and with over €200m to do so.
They could demand exorbitant fees that Barcelona would've been unable or unwilling to pay otherwise.

This sets up the second observation: 19 of these 25 transfers happened in the past five years.
The Neymar transfer suggests the market now suffers from [demand-pull inflation](https://en.wikipedia.org/wiki/Demand-pull_inflation), but how does adjusting for natural inflation change the picture?

<v-img src="2021/04/transfers-3-2.png"></v-img>

Adjusting for inflation shuffles the list with two notable movements: Havertz drops out, Figo comes in; and Zidane's then world-record transfer shoots up from the 24th to 12th most expensive transfer.

Figo and Zidane were the first signings of the first _galáctico_ era at Real Madrid, when club president Florentino Pérez sought to buy a world-class superstar each year.
Those signings were in 2000 and 2001.
This puts into another light how astronomically expensive those transfers were for the time.

## The upward trend in Premier League transfers

Aggregate spending is clearly on the rise, and the previous look at top transfer fees suggests that average spending is also on the rise.
This is true in the Premier League at least.

The median Premier League transfer fee is trending upward but not as fast as the mean fee, with the latter being driven by greater max fees and more frequent purchases in the upper extreme.

<v-img src="2021/04/transfers-4-1.png"></v-img>

The inflating median and mean fees reflect the massive amounts of money coming into the league.
This is a simple case of price levels increasing as income increases.

<v-img src="2021/04/transfers-4-2.png"></v-img>

So this inflation is not necessarily to the league's detriment.
If anything, it indicates its success.
The Premier League is the most popular and profitable soccer league in the world.
The billions of pounds it generates worldwide allow its clubs to pay the highest wages and attract the best players.

However, we must also consider how owners invest into their clubs.
The current league TV deal sees each team receive an equal payment, but owners are free to go beyond this to fund their transfer activity.
Richer and more involved owners can pump hundreds of millions into the league at will, like Roman Abramovich has for Chelsea and Sheikh Mansour has for Manchester City.

The long-term effect of such spending is not unlike what we saw earlier when PSG purchased Neymar.
The money supply increased faster than the real growth of players' market values, resulting in inflation.

## Total spending by the top five leagues

The English predicament of the Big Six outspending everyone and winning everything is not a unique situation in Europe.
The top five leagues are oligopolies, where a handful of clubs dominate the transfer market and the competition.

<v-img src="2021/04/transfers-5-1.png"></v-img>

This is also seen in how many league titles these clubs have won out of the 29 contested from 1992/93&ndash;2020/21:

- **England (26):** Manchester United (13), Chelsea (5), Manchester City (4), Arsenal (3), Liverpool (1)
- **Italy (25):** Juventus (14), AC Milan (6), Inter Milan (4), Roma (1)
- **Spain (25):** Barcelona (14), Real Madrid (9), Atlético Madrid (2)
- **Germany (23):** Bayern Munich (18), Dortmund (5)
- **France (19):** PSG (8), Lyon (7), Monaco (3), Marseille (1)

Continental dominance is less pronounced but still apparent in the number of Champions League wins (finals appearances in parentheses):

- **7:** Real Madrid (7)
- **4:** Barcelona (5)
- **3:** AC Milan (6), Bayern Munich (6)
- **2:** Manchester United (4), Liverpool (4)
- **1:** Marseille (1), Juventus (7), Dortmund (2), Inter Milan (1), Chelsea (2)
- **0:** Arsenal, Monaco, Tottenham, PSG (1), Atlético Madrid (2)

The lack of domestic league parity and these financial disparities are long-running problems in European soccer.
Is something like the Super League indeed a viable solution?

<horizontal-rule></horizontal-rule>

This concludes this set of sample visualizations.
I'm interested in seeing what others can create from this data set and others like it.
For more soccer visualizations with R, check out [Ryo Nakagawara's](https://github.com/Ryo-N7/soccer_ggplots) and [Ewen Henderson's](https://github.com/ewenme/transfers) examples.
