import HomePageList from '../components/HomePage/HomePageList';

const DUMMY_DATA = [
    {
        id: '',
        title: '',
        image: 'https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg',
        address: '',
        description: ''
    },
    {
        id: '',
        title: '',
        image: 'https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg',
        address: '',
        description: ''
    },
    {
        id: '',
        title: '',
        image: 'https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg',
        address: '',
        description: ''
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