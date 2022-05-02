function redirectToPlanner() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    let shape = document.getElementById("shape").value;
    console.log("Redirected to the planner");
    window.location.assign('planner.html?x=' + x + '&y=' + y + '&shape=' + shape);
}