
import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput.js'
import Button from '../Button/Button.js';


const SearchForm = () => {
    return (
        <form className={styles.SearchForm}>
            <TextInput>dsdsd</TextInput>
            <Button>
                <span className="fa fa-search" />
               <span>  sdsd</span>
            </Button>
        </form>
    );
  };

  export default SearchForm;


