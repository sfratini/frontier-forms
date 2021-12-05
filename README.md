# Frontier React Exercise

At [Frontier](https://frontier.jobs), we are on a [mission to get America back to work](https://www.nfx.com/post/3-reasons-why-nfx-invested-in-frontier/).

We are building a vertically-integrated hiring marketplace that connects job seekers and employers faster than ever before. We’ve reimagined the job search experience, allowing jobseekers to book interviews directly with employers and connect them instantly via our virtual interview platform.

The first step of the candidate experience is applying for the job through Frontier's highly optimized application form.

![An example of a Frontier application form](https://frontier-public-assets.s3-us-west-2.amazonaws.com/frontier-form-demo.png)

When we generate our application forms, the first step involves capturing the customer's original form and generating a detailed schematic to describe the form to our React form generator on the frontend. For this exercise we'd like you to build a simple form generator based on some provided data.

## About the exercise
The JSON array in `./src/data/form_instructions.json` is an example of the instructions used by our React app to generate application forms on the fly for our customers.

For this short exercise, please use the basic React setup provided in this repo, along with the provided instruction JSON, to generate a functional application form UI. We want you to solve the problem in a way that makes sense to you, but we ask that you consider the following constraints:

#### Engineering
- Please use Typescript to the best of your ability.
- Please try to make good use of ES6 and React hooks.
- In your finished product, the "Submit" button should log the user-entered form values to the console.
- Try to structure your code so it can be unit tested. Bonus points if you also write a simple unit test for one of your components.

#### Design
- You have full creative control of the design. Feel free to have fun with it, or use our example image as reference.
- Style the UI yourself by any means you feel comfortable (ie. styled-components, SCSS, LESS, vanilla CSS). Try to avoid using third party UI libraries like material-ui and bootstrap. We're primarily looking for consistency with styling, so there's no need to spend time on minute details.

### Getting started

- 1. Checkout this repo and run `yarn install` to install dependencies.
- 2. Open `src/components/App.tsx` where you'll find the instruction JSON you'll need to build the form.
- 3. Run `yarn start` to launch the dev server.

When you send your solution back to us, please include your thoughts on the exercise and how long you spent on it so we can adjust our expectations.

Good luck!

– Frontier Engineering :)

*ps -- We encourage you to treat the brief above like a product spec (and not a school test) where the customer requirements take precidence over the path you take to deliver them. So if you notice a more efficient path, or need to shave off some time to deliver your solution, just let us know in your response!*