import cat from './photo/cat.jpg';
import twitter from './photo/Twitter logo.webp';

export default function Profile() {
  return (
    <div>
      <Avatar 
        person={{name: "Lin Lanying", imageID: '1bX5QH6'}}
        size={100}
      />
      <Avatar 
        person={{name: "Sleeping Cat", imageID: 'cat'}}
        image={cat}
        size={100}
      />
      <Avatar 
        person={{name: "Twitter LOGO", imageID: 'twitter'}}
        image={twitter}
        size={100}
      />
    </div>
  );
}

function Avatar({person, size, image}) {
  return(
    <div>
      <figure>
        <img 
          src={image || "https://i.imgur.com/QIrZWGI.jpg"}
          alt={person.name}
          width={size}
        />
        <figcaption>
          name: {person.name} <br/>
          imageID: {person.imageID}
        </figcaption>
      </figure>
    </div>
  );
}