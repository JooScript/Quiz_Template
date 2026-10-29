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
  const pct = total ? Math.round((correctCount / total) * 100) : 0;
  const pass = pct >= 50;

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
