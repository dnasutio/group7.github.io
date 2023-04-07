import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 id="title1">Group 7 Final Report</h1>
      <h2 id="title2">Educational Games</h2>
      <h3 id="title3">by </h3>
      <h4 id="title4">Ryan Truong, Zhenru Peng, Eleora Hamming, Dylan Nasution, and Christopher Co-Dyre</h4>
      <p className='info'>Executive Summary:</p>
      <p>
        In our initial proposal, we decided to redesign four different educational games for children aged pre-kindergarten to grade 8 and bundle them into one consolidated website. 
        These games were primarily focused on counting. The problems with the initial games included the following issues: overly verbose instructions, little to no feedback on errors, and poor controls that were un-intuitive to use. In our redesign, we aimed to correct these issues, and implement new ideas attuned with good human-computer interaction principles.
      </p>
      <p className='info'>Navigational Map:</p>
      <Image className="imgy" src="/map.svg" alt="Navigational Map" width={600} height={300} />
      <p className='info'>Design Principles:</p>
      <p id="tooltip">Hover me!</p>
      <div id="hidden1">Hi I am Tooltip! ...Interactivity!</div>
      <ul>
        <li>
          <p className='info'>Deep Sea Duel</p>
          


          <ul>
            <li>
              Static Affordance: The behavior of the objects in the game should be interpreted by their visibility; e.g. bubbles inherently make sense to pop by dragging to a beach
            </li>
            <li>
              {`Physical Constraints: A bubble cannot be dragged anywhere but to a player's beach on their turn, so a player cannot add the value to an enemy player's sum by accident.`}
            </li>
            <li>
              {`Externalization of Information: In the old design, a player's current sum would not be displayed as they are playing the game. Now the player's current sum is kept up to date as they are playing so it's easier to compare their sum to the game's target sum.`}
            </li>
            <li>
              {`Feedback: In the original game, if Player 1 drags a bubble to the wrong side of the game, there is no feedback for why it didn't work. Added in a pop-up message explaining they dragged it to the wrong beach to improve user feedback.`}
            </li>
            <li>
              Consistency: The visual aesthetic of the game and its key components have the same cartoony aesthetic throughout.
            </li>
          </ul>
        </li>
        <li>
          <p className='info'>Grouping and Grazing</p>
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
        </li>
        <li>
          <p className='info'>Coinbox</p>
          <ul>
            <li>
            Dynamic Affordance: Previously there was no indication of whether the coins were selectable. Now, hovering a coin changes the cursor to look like a hand.
            </li>
            <li>
            Familiarity: Changed coins to have their corresponding images rather than faces no one recognizes.
            </li>
            <li>
            Psychological Constraints: Previously, there were two identical bins which both accepted coins but the accepted coins depended on the original location of the coins. Now, the bin where a coin can go is highlighted when the user starts dragging. 
            </li>
            <li>
            Metaphor: Cash register to represent a familiar place to exchange money instead of a bin.
            </li>
            <li>
            Visibility: A table for selecting coins to exchange for is used instead of a bin to make it more clear what the purpose of the component is. Now there is one bin for exchanging coins from the floor and one table to choose coins which have a total value corresponding to the coins.
            </li>
          </ul>
        </li>
        <li>
          <p className='info'>{`Okta's Rescue`}</p>
          <iframe width="420" height="315"
          src="https://youtu.be/FVEfs-BzoTw"></iframe>
          <iframe width="420" height="315"
          src="https://youtu.be/c1zdxxeQKZg"></iframe>

          <ul>
            <li>
              Dynamic Affordance: In the original game, there is no feedback for when you perform an action correctly. The game expects you to know what is correct only through the animation. By applying dynamic affordance, the okta is highlighted in yellow when the user hover over which acts like a visual cue. In this case, similar visual cues are present, but are accompanied by additional feedbacks, so that the user knows what UI elements they can interact with and actions they can perform.
            </li>
            <li>
              Progressive Disclosure: In the original game, there are many customized settings for an educational game. By incorporating progressive disclosure into the redesign, the new game manages information complexity where only necessary or requested information is displayed at any given time. We implemented three difficulty modes: easy medium and hard level, instead of having those complex custom options. This allows users to interact with the concepts in a progressively differentiated manner which is intended for education.
            </li>
            <li>
              Functional Consistency: Actions and behaviors are consistent across each educational game
            </li>
          </ul>
        </li>
        <li>
          <p className='info'>Navigational Website Package</p>
          <ul>
            <li>
              Chunking: By way of utilizing white space, visually distinguishing between which options are for which game is clearly understood without the need for extra information; The tutorial and play buttons are grouped together, underneath the respective name and image of the game they represent.
            </li>
            <li>
              {`Mapping: The layout and meaning of the exit button are clear and natural in feel; The user perceives the affordance that by clicking the 'x' they understand that they are closing the game, its location specifically is familiar as to aid with this. When displaying the four titles, the Website package breaks the available space into separate panes, each containing all related controls/options/info for itself.`}
            </li>
            <li>
              Dynamic Affordance: When mousing over any button in the site, the button will change color slightly, indicating to the user they may click the button.
            </li>
            <li>
              Visibility: By keeping the overall number of total available actions low, the user should not feel overwhelmed at any point during the navigation or play.
            </li>
          </ul>
        </li>
      </ul>
      <p className='info'>Final Heuristic Evaluations:</p>
      <ol>
        <li>
          Visibility of System Status<br />
          {`Tooltips within each game inform the user of what each component of the game is used for. For example, hovering the mouse over the text box in the game Coin Box displays a tooltip describing what the user should type into the box.<br />
          For all games the buttons color and the user's cursor changes if the user's cursor is hovering the button.`}
        </li>
        <li>
          Match Between the System and the Real World<br />
          For most games, it was not necessary to have a match between the real world and the system. The game depictions are meant to be engaging, rather than a perfect capture of the real world. However, Grouping and Grazing adjusted the metaphorical elements to better depict the real world.
        </li>
        <li>
          User Control & Freedom<br />
          The popup menu, which is present within every game, can be used to restart or exit the game. Upon pressing the restart or exit button the user is asked if they are sure and they can choose “yes” or “no”.
        </li>
        <li>
          Match Between the System and the Real World<br />
          For most games, it was not necessary to have a match between the real world and the system. The game depictions are meant to be engaging, rather than a perfect capture of the real world. However, Grouping and Grazing adjusted the metaphorical elements to better depict the real world.
        </li>
        <li>
          Consistency and Standards<br />
          The system is aesthetically consistent using a cartoon style for all components. The system is functionally consistent because all games consist of objects which can be selected and moved using mouse input.
        </li>
        <li>
          Recognition vs. Recall in User Interfaces<br />
          Originally, the users needed to read a long paragraph of text to understand the game functions. Now the user can hover over components to display tooltips which tell the user what that component does. There is no need for the user to memorize a paragraph now that they can see tooltips.
        </li>
        <li>
          Flexibility and Efficiency of Use<br />
          {`Due to the project's function for education, there was not much need to introduce flexibility in our redesign. Each game serves a purpose in teaching children a counting method, and the redesign focused on improving overall ease of use for these teaching aspects.`}
        </li>
        <li>
          Aesthetic and Minimalist Design<br />
          Originally, the games seemed cluttered and confusing. Now each game has a reduced UI to only display the necessary information to play the game.
        </li>
        <li>
          Help Users Recognize, Diagnose and Recover from Error<br />
          {`As a general rule, all games introduced feedback for diagnosing errors. Some games also went a step further and added in 'undo' options while selecting certain elements in the redesign step (e.g. Okta's Rescue).`}
        </li>
        <li>
          Help & Documentation<br />
          There was too much documentation in the original games, which was overwhelming for the target end user group. We redesigned the games to include better functionality and remove the excessive documentation.
        </li>
      </ol>
      <p className='info'>Improvements:</p>
      <ol>
        <li>
          For our project, we only implemented one functional mode for each game. In the future, additional modes could be added; e.g. “Decimal” or “Negative” to Deep Sea Duel.
        </li>
        <li>
          Make the game available on mobile.
        </li>
        <li>
          Add keyboard controls and multi-select to increase accessibility.
        </li>
        <li>
          Future versions of the game bundle may contain more games as well as a way to filter games.
        </li>
        <li>
          {`Since this is a kids educational games package, a good improvement would be the introduction of fun/silly sounds to help keep the user engaged, but also to provide an additional form of 'forward' feedback.`}
        </li>
      </ol>
    </main >
  )
}
