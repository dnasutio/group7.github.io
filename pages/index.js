import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        Executive Summary:<br />
        In our initial proposal, we decided to redesign four different educational games for children aged pre-kindergarten to grade 8 and bundle them into one consolidated website. These games were primarily focused on counting. The problems with the initial games included the following issues: overly verbose instructions, little to no feedback on errors, and poor controls that were un-intuitive to use. In our redesign, we aimed to correct these issues, and implement new ideas attuned with good human-computer interaction principles.
      </p>
      <p>
        Design Principles:<br />
        Breakdown by Game:<br />
        Deep Sea Duel<br />
        <ul>
          <li>
            Static affordance: The behavior of the objects in the game should be interpreted by their visibility; e.g. bubbles inherently make sense to pop by dragging to a beach
          </li>
          <li>
            Physical constraints: A bubble cannot be dragged anywhere but to a player’s beach on their turn, so a player cannot add the value to an enemy player’s sum by accident.
          </li>
          <li>
            Externalization of information: In the old design, a player’s current sum would not be displayed as they are playing the game. Now the player’s current sum is kept up to date as they are playing so it’s easier to compare their sum to the game’s target sum.
          </li>
          <li>
            Feedback: In the original game, if Player 1 drags a bubble to the wrong side of the game, there is no feedback for why it didn’t work. Added in a pop-up message explaining they dragged it to the wrong beach to improve user feedback.
          </li>
          <li>
            Consistency: The visual aesthetic of the game and its key components have the same cartoony aesthetic throughout.
          </li>
        </ul>
        Coinbox<br />
        <ul></ul>
        Grouping and Grazing<br />
        <ul>
          <li>
            Consistency: Many of the UI elements did not follow the same design languages. Toolbars were boxes with a dated gradient, but buttons had a flat, minimalistic design. To make the design language more consistent, the toolbars were removed and the game keeps the flat, minimalistic design.
          </li>
          <li>
            Feedback: When a user made an error, the game would give an intrusive and unclear error message. The message covered the screen and prevented any input. There were also loud and slow audio messages that played after every error. The redesign provides better feedback by giving better error messages and making them less intrusive by displaying them in the background and not blocking the screen. The audio was removed, as it was found to be less helpful.
          </li>
          <li>
            Metaphor: When cows were selected, they turned purple and upside down. We found that this tended to be a metaphor for a dead cow and this was off putting. To fix this, instead of the cow turning purple, the cow is now tagged to show that it is selected. This is a metaphor for real-life tagging of cows. A subtle white glow was also added to aid in visibility.
          </li>
          <li>
            Visibility: Selected cows turned purple, which was changed to a slight white glow. This makes the visibility less jarring to the user. When hovering over cows, they now have a white glow to add extra visibility.
          </li>
        </ul>
        Okta's Rescue<br />
        <ul>
          <li>
            Dynamic Affordance: In the original game, there is no feedback for when you perform an action correctly. The game expects you to know what is correct only through the animation. By applying dynamic affordance, the okta is highlighted in yellow when the user hover over which acts like a visual cue. In this case, similar visual cues are present, but are accompanied by additional feedbacks, so that the user knows what UI elements they can interact with and actions they can perform.
          </li>
          <li>
            Progressive disclosure: In the original game, there are many customized settings for an educational game. By incorporating progressive disclosure into the redesign, the new game manages information complexity where only necessary or requested information is displayed at any given time. We implemented three difficulty modes: easy medium and hard level, instead of having those complex custom options. This allows users to interact with the concepts in a progressively differentiated manner which is intended for education.
          </li>
          <li>
            Functional consistency: Actions and behaviors are consistent across each educational game
          </li>
        </ul>
        Navigational Website Package<br />
        <ul>
          <li>
            Chunking: By way of utilizing white space, visually distinguishing between which options are for which game is clearly understood without the need for extra information; The tutorial and play buttons are grouped together, underneath the respective name and image of the game they represent.
          </li>
          <li>
            Mapping: The layout and meaning of the exit button are clear and natural in feel; The user perceives the affordance that by clicking the 'x' they understand that they are closing the game, its location specifically is familiar as to aid with this. When displaying the four titles, the Website package breaks the available space into separate panes, each containing all related controls/options/info for itself.
          </li>
          <li>
            Dynamic Affordance: When mousing over any button in the site, the button will change color slightly, indicating to the user they may click the button.
          </li>
          <li>
            Visibility: By keeping the overall number of total available actions low, the user should not feel overwhelmed at any point during the navigation or play.
          </li>
        </ul>
      </p>
    </main>
  )
}
