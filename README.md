# Work-Day-Scheduler

## About

The point of this project was to generate a calendar-style app primarily using Bootstrap, jQuery and Moment. The user should be able to load a single webpage, insert some activities/tasks that need to be done within a specific hour block and then save that input. The inputs are stored via localStorage and will reload when the user refreshes the page.

The user should also be able to track when activities will need to be started, as the hour-blocks change colour depending on whether they are in the past, present or future.

## Small bugs

A few things to note, when the time switches from one hour block to the next (ex. 7.59pm --> 8.00pm) the colour doesn’t change over until the page is refreshed. In addition at the top of the page where the Date and Time are located, it does take a few seconds to load which isn’t ideal.

https://dinimar-fishboi.github.io/Work-Day-Scheduler/

<img width="1505" alt="Screen Shot 2021-07-11 at 20 22 51" src="https://user-images.githubusercontent.com/83541287/125191444-d6f76f80-e285-11eb-8e97-ebf157c1e036.png">
<img width="1505" alt="Screen Shot 2021-07-11 at 20 22 58" src="https://user-images.githubusercontent.com/83541287/125191449-db238d00-e285-11eb-87f5-5d9b85a6b746.png">
