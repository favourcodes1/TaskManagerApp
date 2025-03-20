async function loadTasks() {
    const res = await fetch("/api/tasks");
    const tasks = await res.json();
    document.getElementById("taskList").innerHTML = tasks.map(task => `<p>${task.title}</p>`).join('');
}
