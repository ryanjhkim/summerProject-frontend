import HomePageList from '../components/HomePage/HomePageList';

const DUMMY_DATA = [
    {
        id: 'picture1',
        title: 'This is a first picture',
        image: 'https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg',
        address: 'address of first picture',
        description: 'description of first picture'
    },
    {
        id: 'picture2',
        title: 'This is a second picture',
        image: 'https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg',
        address: 'address of second picture',
        description: 'description of second picture'
    },
    {
        id: 'picture3',
        title: 'This is a third picture',
        image: 'https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg',
        address: 'address of third picture',
        description: 'description of third picture'
    }
];


function HomePage() {
    return (
        <section>
            <h1>This is the Home Page!!</h1>
            <HomePageList homePageInputs={DUMMY_DATA}/>
        </section>
    );
}

export default HomePage;