// Reasoning and wireframes. design section
import './Design.css';
import { WireframeTemp } from './WirefarmeTemp';
//image import
import MainWire from '../assests/MainWireframe.png';
import DesignWireI from '../assests/DesignWireI.png';
import DesignWireR from '../assests/DesignWireR.png';
import BlogWire from '../assests/BlogWire.png';
import ArtWire from '../assests/ArtWire.png';
import ArtWireP from '../assests/ArtWireP.png';
import ColourP from '../assests/PalletHex.png';
import Hex from '../assests/HexBig.png';

const wireframes = [
  {
    id: 1,
    title: 'Main Page',
    imageUrl: MainWire,
    description: 'Shows the layout of the main page as well as the navigation bar. ',
  },
  {
    id: 2,
    title: 'Design Page Inspo',
    imageUrl: DesignWireI,
    description: '',
  },
  {
    id: 3,
    title: 'Design Page Reasoing',
    imageUrl: DesignWireR,
    description: '',
  },
  {
    id: 4,
    title: 'Blog Page',
    imageUrl: BlogWire,
    description: '',
  },
  {
    id: 5,
    title: 'Art Page',
    imageUrl: ArtWire,
    description: '',
  },
  {
    id: 6,
    title: 'Art Page Planning',
    imageUrl: ArtWireP,
    description: '',
  },
];

export function ReasoningTab () {


    return (
      <section className="Design-Reason">
        <h2>Reasoning and Theory</h2>
        <h3>
          Goals, theory and execution:
        </h3>
      <p>
      I wanted to create a unique website inspired by visual design ideas that I find interesting. I wanted the websites design to make reference to old web design practises while still upholding various functional aspects of modern webdesign such as readability, simplicity and convenience. 
      I wish to achieve this by utilizing and being mindful of modern web design conventions (format of pages, interactivity (providing appropriate feedback to the users inputs) and simplicity) while also tying in visual elements that tie into the ideas of Plantwave.
      </p>
      <article className='Design-Colour'>
        <h3>
          Colour palette:
        </h3>
        <img src={Hex} alt="color palette"/>
        <p>
          The website will mainly be in greyscale, using various shades of grey. The other elements of colour on the website will come mostly from 
          various images and videos of nature and plants. The pinks and blues are there as preposed accent colour to provide contrast, break up visual elements, draw the users attention to specific elements or provide feedback to the user.   
        </p>
      </article>
      <article className='Design-Typ'>
        <h3>
          Typography and Font:
        </h3>
        <p>
          I want to use a mix of the chicago which was the font used on the classic mac os, Jacquard 12 which is a google font (for strange art and neon text), the default font and Chakra Petch which is another google font.
        </p>
      </article>

      <article className='Design-Wireframes'>
    
      <h3>
        Wireframes
      </h3>
      <div className="Wireframe-Container">
      {wireframes.map((frames) => (
        <WireframeTemp
          key={frames.id}
          title={frames.title}
          imageUrl={frames.imageUrl}
          description={frames.description}
        />
      ))}
    </div>     
      </article>
      </section>
    );
  };