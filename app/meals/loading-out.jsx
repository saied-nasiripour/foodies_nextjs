import classes from './loading.module.css'

function MealsLoadingPage() {
    return (
        <p className={classes.loading}>Fetching Meals...</p>
    );
}

export default MealsLoadingPage;