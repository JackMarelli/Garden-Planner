function redirectToPlanner() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    console.log("Redirected to the planner");
    window.location.assign('planner.php?x=' + x + '&y=' + y);
}