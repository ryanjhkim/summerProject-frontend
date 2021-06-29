import AboutUsList from '../components/AboutUsPage/AboutUsList';

const DUMMY_DATA = [
    {
        id: 'picture1',
        title: 'This is a first picture',
        image: 'image of a first picture',
        address: 'address of first picture',
        description: 'description of first picture'
    },
    {
        id: 'picture2',
        title: 'This is a second picture',
        image: 'image of a second picture',
        address: 'address of second picture',
        description: 'description of second picture'
    },
    {
        id: 'picture3',
        title: 'This is a third picture',
        image: 'image of a third picture',
        address: 'address of third picture',
        description: 'description of third picture'
    }
];


function AboutUs() {
    return <section>
        <h1>All about us!</h1>
        <AboutUsList aboutUsInputs={DUMMY_DATA}/>
    </section>
}

export default AboutUs;