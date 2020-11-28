import React from 'react';
import './App.css';
import Title from '../title/Title';
import Nav from '../nav/Nav';

const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam lectus ut commodo varius. Duis suscipit hendrerit nunc vitae placerat. Ut vehicula dolor et libero malesuada lacinia. Nullam pretium massa in nisl elementum imperdiet. Donec ac accumsan ex, ac gravida diam. Fusce eget mauris lectus. Nulla a rhoncus urna. Duis id magna justo. Cras tristique eget eros ut dictum. Cras id nunc ultricies, elementum arcu volutpat, imperdiet tellus. Vestibulum maximus efficitur odio eu pretium. Nulla eu porttitor ex. Fusce porta mollis ipsum, a venenatis mauris imperdiet ac.
Duis tincidunt dui in felis mollis efficitur. Quisque efficitur blandit est id laoreet. Sed non dapibus enim. Vestibulum arcu ipsum, tincidunt non mattis vitae, rhoncus eget quam. Mauris quis cursus nisl. Mauris pellentesque, risus vel sagittis egestas, ante nulla condimentum urna, in pulvinar ex lectus eu metus. Sed sem mi, mattis non accumsan a, dignissim et odio. Quisque vel sodales massa, cursus sollicitudin ligula. Curabitur porta dignissim metus id hendrerit. Mauris eget tincidunt magna.
Etiam sagittis nec metus interdum suscipit. Etiam viverra massa magna. Pellentesque viverra, diam eget pretium euismod, lorem augue iaculis felis, id maximus nulla tortor in nibh. Nunc a sapien pharetra, finibus mauris at, dapibus diam. Fusce vitae lectus blandit, commodo nisl a, molestie elit. Mauris vitae mi in quam fermentum pellentesque rhoncus non nibh. Maecenas a interdum neque, ut ultrices orci. Mauris leo lorem, euismod et sem non, molestie ornare felis. Aenean nec justo magna. Proin quis tincidunt odio, non eleifend metus. Nam dignissim quam nec justo congue pretium. Donec viverra, massa et tempus ullamcorper, urna nibh varius mi, sed dapibus nibh leo sit amet sapien. Nulla auctor odio interdum ullamcorper blandit.
Curabitur a lectus convallis, facilisis dolor eu, vulputate purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum sapien nisl, sed pulvinar leo consequat vel. Donec non elit non est accumsan placerat at sit amet lacus. Integer convallis facilisis libero sed viverra. Cras elementum, enim vel mattis fermentum, sem lorem laoreet tellus, non tincidunt massa purus tempor elit. Vestibulum et nulla sem.
Ut vulputate elementum ornare. Integer varius, orci eu vehicula accumsan, leo libero tempus ex, et rhoncus felis ante et diam. Fusce vitae dictum arcu, bibendum suscipit felis. Duis vel hendrerit diam, sed tincidunt dui. Aliquam at ipsum condimentum, pharetra nisl elementum, tristique erat. Phasellus vel velit metus. In nec ipsum et nunc facilisis tempor at posuere nibh. Integer feugiat, ipsum id commodo placerat, turpis odio mollis tortor, et pulvinar elit orci vitae arcu. Morbi diam elit, facilisis eu dapibus et, interdum at nulla. Nullam nec sagittis tellus. Integer at efficitur ante, at viverra mi. In laoreet ante sit amet sagittis luctus. Curabitur suscipit metus et volutpat condimentum. Phasellus vel tortor vel ante vehicula dapibus. Fusce rhoncus mi nulla, efficitur tincidunt dui tristique ut.
`

const longLorem = lorem + lorem +lorem +lorem;

function App() {
  return (
    <div className='App'>
      <Title
        greeting={'Hi, I am'}
        name={'Manuel'}
      />
      <Nav/>
      <span>{longLorem}</span>    
    </div>
  );
}

export default App;
