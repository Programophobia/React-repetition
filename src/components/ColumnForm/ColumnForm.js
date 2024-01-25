import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';


const ColumnForm = props => {


    const [title, setValue] = useState('');
const [icon, setIcon] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title,  icon: icon });
        setValue('');
        setIcon('')
    }

	return (
        <form className={styles.input} onSubmit={handleSubmit}>
           <span className={styles.o}>Title: </span><TextInput type="text" value={title} onChange={e => setValue(e.target.value)} />
           <span className={styles.o}>Icon: </span><TextInput type="text"  value={icon} onChange={e => setIcon(e.target.value)}/>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm