const QUIZ = {
  title: "Database 1 Quiz",
  description:
    "Choose one answer for each question, then press “End Quiz” to see your grade.",
  shuffle: true,
  questions: [
    {
      text: "What does DDL stand for?",
      options: [
        "Data Definition Language",
        "Data Description Logic",
        "Database Data Language",
        "Data Development Language",
      ],
      correct: 0,
    },
    {
      text: "Which of the following can DDL specify?",
      options: [
        "Only table names",
        "Only attribute names",
        "Schemas, data types, constraints, and storage structures",
        "Only SQL queries",
      ],
      correct: 2,
    },
    {
      text: "Which SQL data type stores fixed-length character strings?",
      options: ["VARCHAR(n)", "CHAR(n)", "INT", "REAL"],
      correct: 1,
    },
    {
      text: "What is the main difference between CHAR(n) and VARCHAR(n)?",
      options: [
        "CHAR stores numbers only",
        "VARCHAR has a fixed length",
        "CHAR has a fixed length, while VARCHAR has a variable length",
        "There is no difference",
      ],
      correct: 2,
    },
    {
      text: "Which data type stores integer values?",
      options: ["NUMERIC", "INT", "VARCHAR", "DOUBLE PRECISION"],
      correct: 1,
    },
    {
      text: "What does NUMERIC(3,1) mean?",
      options: [
        "3 digits after the decimal point",
        "1 digit in total",
        "3 digits in total, with 1 digit after the decimal point",
        "3 digits before and 1 digit after the decimal point",
      ],
      correct: 2,
    },
    {
      text: "Which value can be stored exactly in NUMERIC(3,1)?",
      options: ["444.5", "44.5", "0.32", "1234.5"],
      correct: 1,
    },
    {
      text: "Which data types are used for floating-point numbers?",
      options: [
        "CHAR and VARCHAR",
        "INT and SMALLINT",
        "REAL and DOUBLE PRECISION",
        "PRIMARY KEY and FOREIGN KEY",
      ],
      correct: 2,
    },
    {
      text: "What is the purpose of the CREATE TABLE command?",
      options: [
        "To delete a database",
        "To define and create a table",
        "To retrieve records",
        "To update existing values only",
      ],
      correct: 1,
    },
    {
      text: "In CREATE TABLE r (A1 D1, A2 D2), what does D1 represent?",
      options: [
        "The table name",
        "The primary key",
        "The data type of attribute A1",
        "The number of rows",
      ],
      correct: 2,
    },
    {
      text: "Which constraint uniquely identifies each row in a table?",
      options: ["NOT NULL", "FOREIGN KEY", "PRIMARY KEY", "DISTINCT"],
      correct: 2,
    },
    {
      text: "What does the NOT NULL constraint prevent?",
      options: [
        "Duplicate table names",
        "NULL values in the specified column",
        "All updates to the table",
        "All numeric values",
      ],
      correct: 1,
    },
    {
      text: "What is the purpose of a FOREIGN KEY?",
      options: [
        "To sort records",
        "To link a column or columns to a referenced table",
        "To remove duplicate rows",
        "To rename a column",
      ],
      correct: 1,
    },
    {
      text: "Which constraint is used to define a primary key consisting of ID and course_id?",
      options: [
        "PRIMARY KEY (ID, course_id)",
        "PRIMARY KEY (ID) AND (course_id)",
        "FOREIGN KEY (ID, course_id)",
        "NOT NULL (ID, course_id)",
      ],
      correct: 0,
    },
    {
      text: "Which statement correctly defines the instructor table's ID as a primary key?",
      options: [
        "ID CHAR(5) UNIQUE TABLE",
        "PRIMARY KEY ID",
        "ID CHAR(5), PRIMARY KEY (ID)",
        "ID PRIMARY",
      ],
      correct: 2,
    },
    {
      text: "In the student table, what does FOREIGN KEY (dept_name) REFERENCES department mean?",
      options: [
        "Every student must have a unique department name",
        "The department name refers to a key in the department table",
        "The department table is deleted",
        "The student table becomes a department",
      ],
      correct: 1,
    },
    {
      text: "Why does the takes table have a composite primary key?",
      options: [
        "To identify a course enrollment using multiple attributes",
        "To make every column nullable",
        "To remove the student table",
        "To store only one record",
      ],
      correct: 0,
    },
    {
      text: "Which command inserts a new row into instructor?",
      options: [
        "ADD INTO instructor VALUES (...)",
        "INSERT INTO instructor VALUES (...)",
        "CREATE instructor VALUES (...)",
        "UPDATE instructor VALUES (...)",
      ],
      correct: 1,
    },
    {
      text: "What does DELETE FROM student do when no WHERE clause is included?",
      options: [
        "Deletes the student table itself",
        "Deletes all rows from student",
        "Deletes only the first row",
        "Deletes the student database",
      ],
      correct: 1,
    },
    {
      text: "Which command removes a table definition?",
      options: ["DELETE TABLE r", "REMOVE r", "DROP TABLE r", "ALTER TABLE r"],
      correct: 2,
    },
    {
      text: "Which statement adds a new column A with data type D to table r?",
      options: [
        "ALTER TABLE r ADD A D",
        "UPDATE TABLE r ADD A D",
        "INSERT TABLE r ADD A D",
        "CREATE COLUMN A IN r",
      ],
      correct: 0,
    },
    {
      text: "According to the lesson, what happens to existing rows when a nullable column is added?",
      options: [
        "The table is deleted",
        "All existing rows are deleted",
        "The new column receives NULL for existing rows",
        "Every row receives zero",
      ],
      correct: 2,
    },
    {
      text: "Which statement removes an attribute A from table r?",
      options: [
        "DELETE A FROM r",
        "ALTER TABLE r DROP A",
        "DROP ATTRIBUTE A",
        "REMOVE COLUMN A",
      ],
      correct: 1,
    },
    {
      text: "What are the three main clauses in the basic SQL query structure shown in the lesson?",
      options: [
        "CREATE, INSERT, DELETE",
        "SELECT, FROM, WHERE",
        "ADD, DROP, ALTER",
        "PRIMARY, FOREIGN, NOT NULL",
      ],
      correct: 1,
    },
    {
      text: "Which clause specifies the attributes to appear in the query result?",
      options: ["FROM", "WHERE", "SELECT", "CREATE"],
      correct: 2,
    },
    {
      text: "Which clause specifies the tables used in a query?",
      options: ["SELECT", "FROM", "WHERE", "DISTINCT"],
      correct: 1,
    },
    {
      text: "Which clause filters rows according to a condition?",
      options: ["FROM", "AS", "WHERE", "ALL"],
      correct: 2,
    },
    {
      text: "Which keyword removes duplicate rows from the query result?",
      options: ["ALL", "DISTINCT", "UNIQUE TABLE", "FILTER"],
      correct: 1,
    },
    {
      text: "What does SELECT * FROM instructor return?",
      options: [
        "Only the ID column",
        "Only the name column",
        "All columns from instructor",
        "Only distinct department names",
      ],
      correct: 2,
    },
    {
      text: "What does SELECT 'A' FROM instructor return?",
      options: [
        "One row containing the value A",
        "One A value for every row in instructor",
        "All instructor names",
        "An error because literals are not allowed",
      ],
      correct: 1,
    },
    {
      text: "What is the purpose of the AS keyword in SELECT salary/12 AS monthly_salary?",
      options: [
        "To filter salaries",
        "To rename the result column",
        "To delete salary",
        "To change salary's stored data type",
      ],
      correct: 1,
    },
    {
      text: "Which arithmetic operators are allowed in SELECT expressions according to the lesson?",
      options: ["+, -, *, /", "Only + and -", "Only * and /", "%, ^, //"],
      correct: 0,
    },
    {
      text: "Which query finds the names of instructors in the Comp. Sci. department?",
      options: [
        "SELECT name FROM instructor WHERE dept_name = 'Comp. Sci.';",
        "SELECT instructor WHERE name = 'Comp. Sci.';",
        "FROM instructor SELECT name;",
        "SELECT name WHERE instructor = 'Comp. Sci.';",
      ],
      correct: 0,
    },
    {
      text: "Which query finds instructors in Comp. Sci. with a salary greater than 70000?",
      options: [
        "SELECT name FROM instructor WHERE salary < 70000;",
        "SELECT name FROM instructor WHERE dept_name = 'Comp. Sci.' AND salary > 70000;",
        "SELECT name FROM instructor WHERE dept_name = 'Biology' OR salary < 70000;",
        "SELECT name FROM instructor WHERE salary = 70000;",
      ],
      correct: 1,
    },
    {
      text: "SQL names are case-insensitive according to the lesson.",
      options: ["True", "False"],
      correct: 0,
    },
    {
      text: "SQL automatically removes duplicate rows from every query result.",
      options: ["True", "False"],
      correct: 1,
    },
    {
      text: "The ALL keyword specifies that duplicate values should not be removed.",
      options: ["True", "False"],
      correct: 0,
    },
    {
      text: "A primary key can consist of more than one attribute.",
      options: ["True", "False"],
      correct: 0,
    },
    {
      text: "The WHERE clause corresponds to the projection operation in relational algebra.",
      options: ["True", "False"],
      correct: 1,
    },
    {
      text: "SQL supports the logical operators AND, OR, and NOT.",
      options: ["True", "False"],
      correct: 0,
    },
  ],
};

const $ = (id) => document.getElementById(id);
let questions = [];
let finished = false;

function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function build() {
  finished = false;
  questions = QUIZ.shuffle ? shuffled(QUIZ.questions) : QUIZ.questions.slice();
  $("title").textContent = QUIZ.title;
  $("description").textContent = QUIZ.description;
  document.title = QUIZ.title;
  $("result").hidden = true;
  $("result").className = "result";
  $("ringFill").style.strokeDashoffset = 327;
  $("endBtn").className = "";
  document.querySelectorAll(".confetti").forEach((c) => c.remove());
  $("warn").textContent = "";
  $("endBtn").hidden = false;
  $("restartBtn").hidden = true;

  const box = $("quiz");
  box.innerHTML = "";
  questions.forEach((q, i) => {
    const card = document.createElement("fieldset");
    card.className = "q";
    card.style.margin = "16px";
    card.id = "q" + i;
    card.style.animationDelay = i * 80 + "ms";

    const legend = document.createElement("p");
    legend.className = "q-title";
    legend.innerHTML = '<span class="q-num">' + (i + 1) + ".</span>";
    legend.appendChild(document.createTextNode(q.text));
    card.appendChild(legend);

    q.options.forEach((opt, j) => {
      const label = document.createElement("label");
      label.className = "opt";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + i;
      input.value = j;
      input.addEventListener("change", () => {
        clearMissing(i);
        updateProgress();
      });
      const span = document.createElement("span");
      span.textContent = opt;
      label.append(input, span);
      card.appendChild(label);
    });
    box.appendChild(card);
  });
  updateProgress();
  window.scrollTo({ top: 0 });
}

function answeredCount() {
  return questions.filter((_, i) =>
    document.querySelector('input[name="q' + i + '"]:checked'),
  ).length;
}

function clearMissing(i) {
  const card = $("q" + i);
  if (!card) return;
  card.classList.remove("missing");
  card.removeAttribute("title");
  const tip = card.querySelector(".tip");
  if (tip) tip.remove();
}

function updateProgress() {
  const n = answeredCount(),
    total = questions.length;
  $("fill").style.width = (total ? (n / total) * 100 : 0) + "%";
  $("progressText").textContent = n + " of " + total + " answered";
  $("endBtn").classList.toggle("ready", total > 0 && n === total && !finished);
}

function markMissing() {
  let first = null;
  questions.forEach((_, i) => {
    const card = $("q" + i);
    const answered = document.querySelector('input[name="q' + i + '"]:checked');
    card.classList.remove("missing");
    const old = card.querySelector(".tip");
    if (old) old.remove();
    if (!answered) {
      card.classList.add("missing");
      card.title = "This question is not answered";
      const tip = document.createElement("span");
      tip.className = "tip";
      tip.setAttribute("role", "tooltip");
      tip.textContent = "⚠ Not answered";
      card.appendChild(tip);
      if (!first) first = card;
    }
  });
  return first;
}

const reduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function reveal(q, i, pickedIdx, ok) {
  const card = $("q" + i);
  card.classList.add("locked", ok ? "correct" : "wrong");
  card.querySelectorAll(".opt").forEach((label, j) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    if (j === q.correct) {
      label.classList.add("is-correct");
      tag.textContent =
        j === pickedIdx ? "✓ Your answer · Correct" : "✓ Correct answer";
      label.appendChild(tag);
    } else if (j === pickedIdx) {
      label.classList.add("is-wrong");
      tag.textContent = "✗ Your answer · Wrong";
      label.appendChild(tag);
    }
  });
  const status = document.createElement("div");
  status.className = "status";
  status.textContent =
    pickedIdx === -1 ? "✗ Not answered" : ok ? "✓ Correct" : "✗ Wrong";
  card.appendChild(status);
}

function confetti() {
  if (reduceMotion()) return;
  const box = document.createElement("div");
  box.className = "confetti";
  const colors = [
    "#2f5bea",
    "#8b5cf6",
    "#ec4899",
    "#f59e0b",
    "#14b8a6",
    "#22c55e",
  ];
  for (let k = 0; k < 70; k++) {
    const p = document.createElement("i");
    p.style.left = Math.random() * 100 + "%";
    p.style.background = colors[k % colors.length];
    p.style.animationDuration = 2 + Math.random() * 2.5 + "s";
    p.style.animationDelay = Math.random() * 0.8 + "s";
    box.appendChild(p);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 5500);
}

function countUp(target) {
  const text = $("ringText");
  if (reduceMotion()) {
    text.textContent = target + "%";
    return;
  }
  const t0 = performance.now(),
    dur = 1400;
  (function step(now) {
    const k = Math.min((now - t0) / dur, 1);
    text.textContent = Math.round((1 - Math.pow(1 - k, 3)) * target) + "%";
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}

function endQuiz() {
  if (finished) return;
  const unanswered = questions.length - answeredCount();
  if (unanswered > 0) {
    const first = markMissing();
    first.scrollIntoView({
      behavior: reduceMotion() ? "auto" : "smooth",
      block: "center",
    });
    return;
  }
  finished = true;

  const btn = $("endBtn");
  btn.classList.remove("ready");
  btn.classList.add("leaving");

  let correctCount = 0;
  questions.forEach((q, i) => {
    const picked = document.querySelector('input[name="q' + i + '"]:checked');
    const pickedIdx = picked ? Number(picked.value) : -1;
    const ok = pickedIdx === q.correct;
    if (ok) correctCount++;
    document
      .querySelectorAll('input[name="q' + i + '"]')
      .forEach((r) => (r.disabled = true));
    // Reveal each question one after another
    setTimeout(
      () => reveal(q, i, pickedIdx, ok),
      reduceMotion() ? 0 : 500 + i * 160,
    );
  });

  const total = questions.length;
  const passMark = questions.length / 2;
  const pct = total ? Math.round((correctCount / total) * 100) : 0;
  const pass = pct >= passMark;

  setTimeout(
    () => {
      btn.hidden = true;
      $("restartBtn").hidden = false;
      const res = $("result");
      res.hidden = false;
      res.className = "result show " + (pass ? "pass" : "fail");
      $("score").textContent = correctCount + " / " + total;
      $("verdict").textContent = pass ? "Passed 🎉" : "Not passed";
      $("verdict").className = "verdict " + (pass ? "pass" : "fail");
      $("counts").textContent =
        correctCount + " correct · " + (total - correctCount) + " wrong";
      $("warn").textContent = "";
      window.scrollTo({
        top: 0,
        behavior: reduceMotion() ? "auto" : "smooth",
      });
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          $("ringFill").style.strokeDashoffset = 327 * (1 - pct / 100);
          countUp(pct);
          if (pass) confetti();
        }),
      );
    },
    reduceMotion() ? 0 : 400,
  );
}

$("endBtn").addEventListener("click", endQuiz);
$("restartBtn").addEventListener("click", build);
build();
