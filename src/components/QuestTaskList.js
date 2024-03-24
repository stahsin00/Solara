import React, { useEffect, useState } from 'react';
import QuestTask from './QuestTask';
import { useUser } from '../context/UserContext';
import { questList } from '../utils/quest';

function QuestTaskList(props) {
  const { userId, tasks, setTasks, tasksChanged } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchTasks() {
    setLoading(true);

    try {
      const result = await questList(userId);
      setTasks(result);
      setError(null);
    } catch (e) {
      console.error(e.message);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect( () => {
    fetchTasks();
  }, [tasksChanged]);

  const taskList = (error) ? (<div className='error-message'>{error}</div>) 
                    : ((!tasks) ? <></> 
                      : tasks.map((task) => {
                        return <QuestTask 
                          task={task}
                          key={task._id}
                          setSelectedTask={props.setSelectedTask}
                        />
}));

  return (
    <div className="quest-tasks">
        {(props.selectedTab == "All") ?
        (<div className='all-quests'>
          <h2>All</h2>
          <hr />
          <div className='quest-list'>
            {loading ? (<div>loading...</div>) : taskList}
          </div>
        </div>)
        :
        <div>
          <h2>Coming soon.</h2>
        </div>
        }
    </div>
  );
}

export default QuestTaskList;