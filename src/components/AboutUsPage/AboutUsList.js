import AboutUsItem from './AboutUsItem';
import classes from './AboutUsList.module.css';
//we named it 'classes' because this will actually be a JavaScript object
//where all the CSS classes you define in './AboutUsList.module.css' this CSS file,
//will be properties of this object.
//You can then use them in your JSX code to attach those classes to your elements,
//and behind the scenes everything will be transformed such that those class names
//are made unique per component.

function AboutUsList(props) {
    return (
        <ul className={classes.list}> 
          {props.aboutUsInputs.map((aboutUsItem) => (
            <AboutUsItem
                key={aboutUsItem.id}
                id={aboutUsItem.id}
                image={aboutUsItem.image}
                title={aboutUsItem.title}
                address={aboutUsItem.address}
                description={aboutUsItem.description}
            />
        ))}

    </ul>
    );
}

export default AboutUsList;