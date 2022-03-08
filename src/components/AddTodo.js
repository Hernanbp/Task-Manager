import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { AnimatePresence, motion } from 'framer-motion'
import { format } from 'date-fns';


export const AddTodo = () => {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();

        if (value.trim().length === 0) {
            setError('Enter a task before adding!');
            setValue('');
            return;
        }

        dispatch(
            addTask({
                task: value,
                date: format(new Date(), 'yyyy/MM/dd kk:mm:ss')
            })
        )
        setValue('')
        setError('')
    }

    return (
        <>
            <form onSubmit={onSubmit} className="add-todo">
                <input
                    type="text"
                    placeholder="Add task..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className="btn-add" onClick={onSubmit}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="#77748C" />
                    </svg>
                </button>
            </form>
            <div
                className="error">
                <AnimatePresence>
                    {error && (
                        <motion.p
                            key="error"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ y: 20, opacity: 0, rotateY: "30deg" }}
                            transition=
                            {{
                                duration: .2,
                                mass: .8,
                                type: "spring"
                            }}>
                            {error}
                        </motion.p>
                    )
                    }
                </AnimatePresence>
            </div>
        </>
    )
}
