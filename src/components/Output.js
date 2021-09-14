import { useState } from 'react';
import { filters } from '../filters';
import { Accordion, Loader, Dimmer, Card, Icon, Container } from 'semantic-ui-react'

// let panels = [
//     {
//         key: 'what-is-dog',
//         title: 'What is a dog?',
//         content: [
//             'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
//             'guest in many households across the world.',
//         ].join(' '),
//     },
//     {
//         key: 'kinds-of-dogs',
//         title: 'What kinds of dogs are there?',
//         content: [
//             'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog',
//             'that they find to be compatible with their own lifestyle and desires from a companion.',
//         ].join(' '),
//     },
//     {
//         key: 'acquire-dog',
//         title: 'How do you acquire a dog?',
//         content: {
//             content: (
//                 <div>
//                     <p>
//                         Three common ways for a prospective owner to acquire a dog is from
//                         pet shops, private owners, or shelters.
//                     </p>
//                     <p>
//                         A pet shop may be the most convenient way to buy a dog. Buying a dog
//                         from a private owner allows you to assess the pedigree and
//                         upbringing of your dog before choosing to take it home. Lastly,
//                         finding your dog from a shelter, helps give a good home to a dog who
//                         may not find one so readily.
//                     </p>
//                 </div>
//             ),
//         },
//     },
// ]

export default function Output(props) {
    const { data } = props

    const [loading, setLoading] = useState(false);
    const [isDataReady, setIsDataReady] = useState(false);
    const [isOutputReady, setIsOutputReady] = useState(false);

    return (
        Object.entries(data).length !== 0 ?
            <div className="output-section" >
                <Container>
                    {loading === true ?
                        <Dimmer active inverted>
                            <Loader active inverted content={isDataReady === false ? "Preparing data" : "Parsing data"} />
                        </Dimmer>
                        : null
                    }
                    <Card.Group itemsPerRow={3}>
                        {filters.map((filter, index) =>
                            <Card key={index}>
                                <Card.Content>
                                    <Icon size='large' color={Object.keys(data).includes(filter.name) ? "green" : "red"} name={Object.keys(data).includes(filter.name) ? "check circle outline" : "times circle outline"} />
                                    {filter.label}
                                </Card.Content>
                            </Card>                            
                        )}
                    </Card.Group>
                    <div id="tags-section" style={{ marginTop: "1rem", marginBottom: "2rem" }}>

                    </div>

                    {/* <div basic className="tables" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                    <Accordion
                        fluid
                        styled
                        defaultActiveIndex={[0]}
                        exclusive={false}
                        panels={panels}
                    />
                </div> */}
                </Container>
            </div >
            : null
    )
}
