// javascript Object.
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    section: [{ section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
        {section: "002", enrolled: 80, instructor: "Sarah Gobble"}
    ]
}

function setCourseInformation(course) {
    document.querySelector(".code").textContent = `${course.code} - ${course.title}`;
}

setCourseInformation(aCourse);



function renderSection() {
    let tbody = aCourse.section;
    let row = "";

    for (let sect of tbody) {
        row += `<tr>
            <td>${sect.section}</td>
            <td>${sect.enrolled}</td>
            <td>${sect.instructor}</td>
        </tr>`
    }
    document.querySelector("#section").innerHTML = row;
}   

renderSection();
