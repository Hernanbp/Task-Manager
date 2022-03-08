import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { TodoItem } from '../components/TodoItem'

export const TodoList = () => {

    const todos = useSelector((state) => {
        return state.tasks;
    })

    return (
        <ul className="todos">
            <AnimatePresence>
                {todos.map(({ id, name, date, status }) => (
                    <motion.div
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 80 }}
                        transition={{ duration: .5, mass: .8, type: "spring" }}
                        key={id}>
                        <TodoItem id={id} title={name} date={date} completed={status} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </ul>
    )
}
