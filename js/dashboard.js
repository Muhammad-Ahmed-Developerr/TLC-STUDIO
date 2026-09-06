/* ==========================================================================
   TLC STUDIO LTD - STUDENT DASHBOARD & AI ASSISTANT JAVASCRIPT
   EduTech Portal Prototype & Interactive AI Chat Simulator
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initQuizEngine();
  initLessonPlayer();
  initAssignmentSubmit();
  initAiAssistant();
});

/* --------------------------------------------------------------------------
   1. Interactive Quiz Assessment Engine
   -------------------------------------------------------------------------- */
function initQuizEngine() {
  const quizForm = document.getElementById('academyQuizForm');
  const quizResultModal = document.getElementById('quizResultModal');
  const scoreDisplay = document.getElementById('quizScoreDisplay');

  if (!quizForm) return;

  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const answers = {
      q1: 'porosity',
      q2: 'patch-test',
      q3: 'neutralizer'
    };

    let score = 0;
    const total = Object.keys(answers).length;

    Object.keys(answers).forEach(q => {
      const selected = quizForm.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answers[q]) {
        score++;
      }
    });

    const percentage = Math.round((score / total) * 100);

    if (scoreDisplay) {
      scoreDisplay.textContent = `${percentage}% (${score}/${total} Correct)`;
    }

    if (quizResultModal) {
      quizResultModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  });
}

/* --------------------------------------------------------------------------
   2. Lesson Module Player & Video Modal Simulation
   -------------------------------------------------------------------------- */
function initLessonPlayer() {
  const lessonItems = document.querySelectorAll('.lesson-item');

  lessonItems.forEach(item => {
    item.addEventListener('click', () => {
      lessonItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const title = item.querySelector('.lesson-title')?.textContent;
      const mainTitle = document.getElementById('activeLessonTitle');
      if (mainTitle && title) {
        mainTitle.textContent = title;
      }
    });
  });

  const markCompleteBtn = document.getElementById('btnMarkLessonComplete');
  if (markCompleteBtn) {
    markCompleteBtn.addEventListener('click', () => {
      markCompleteBtn.textContent = 'Completed ✓';
      markCompleteBtn.classList.remove('btn-black');
      markCompleteBtn.classList.add('btn-green');
      showToast('Lesson marked as completed! Progress updated.');
    });
  }
}

/* --------------------------------------------------------------------------
   3. Assignment Submission Mock
   -------------------------------------------------------------------------- */
function initAssignmentSubmit() {
  const submitForm = document.getElementById('assignmentSubmitForm');

  if (!submitForm) return;

  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Assignment submitted successfully to your tutor!');
    const modal = submitForm.closest('.modal-backdrop');
    if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

/* --------------------------------------------------------------------------
   4. TLC AI Learning & Consultation Assistant Chat Simulator
   -------------------------------------------------------------------------- */
function initAiAssistant() {
  const chatMessages = document.getElementById('aiChatMessages');
  const chatInput = document.getElementById('aiChatInput');
  const sendBtn = document.getElementById('btnSendAi');
  const promptButtons = document.querySelectorAll('[data-ai-prompt]');

  if (!chatMessages || !chatInput || !sendBtn) return;

  const responses = {
    color: `<strong>Color Theory Insight:</strong><br>When assessing client hair prior to chemical color application, always evaluate three core factors:
    <ul>
      1. <strong>Porosity:</strong> High porosity hair absorbs color quickly but fades faster. Use a pre-color porosity equalizer.
      2. <strong>Underlying Pigment:</strong> Refer to the undertone scale (e.g., Level 6 = Red/Orange).
      3. <strong>Elasticity:</strong> Perform a wet elasticity test to confirm structural integrity.
    </ul>
    <em>Tutor Note: Always record patch test results 48 hours prior to service.</em>`,

    porosity: `<strong>Hair Porosity Summary:</strong><br>Porosity is your hair's ability to absorb and retain moisture. 
    <ul>
      <li><strong>Low Porosity:</strong> Cuticles are tightly sealed. Requires heat or alkaline prep for deep conditioning.</li>
      <li><strong>Medium Porosity:</strong> Healthy cuticle layer. Accepts moisture easily.</li>
      <li><strong>High Porosity:</strong> Cuticles are raised or damaged. Needs protein-enriching treatments like TLC Bond Repair.</li>
    </ul>`,

    consultation: `<strong>Consultation Checklist:</strong><br>1. Client Lifestyle & Maintenance Commitment<br>2. Chemical History (past 2 years)<br>3. Scalp Health Examination<br>4. Desired Result vs Realistic Maintenance Schedule.`,

    assignments: `<strong>Upcoming Submissions:</strong><br>• <strong>Level 2 Cutting Assessment Portfolio:</strong> Due Friday at 17:00<br>• <strong>Color Theory Worksheet 3:</strong> Completed (Grade: 94%)`,

    default: `Thank you for your question. As your TLC AI Learning Assistant, I can help clarify hairdressing theory, consultation protocols, and curriculum topics. For practical grading or formal assessment feedback, please consult your assigned TLC Educator.`
  };

  function appendMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-msg-bubble ${isUser ? 'user-msg' : 'assistant-msg'}`;
    msgDiv.style.cssText = `
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      ${isUser ? 'justify-content: flex-end;' : ''}
    `;

    const content = `
      ${!isUser ? '<div style="width:36px; height:36px; border-radius:50%; background:#D53A74; color:#fff; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.8rem; font-weight:700;">TLC</div>' : ''}
      <div style="
        max-width: 80%;
        background: ${isUser ? '#090909' : '#FFFFFF'};
        color: ${isUser ? '#FFFFFF' : '#090909'};
        padding: 1.25rem 1.5rem;
        border-radius: 16px;
        font-size: 0.95rem;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        border: 1px solid ${isUser ? '#090909' : 'rgba(0,0,0,0.08)'};
      ">
        ${text}
      </div>
      ${isUser ? '<div style="width:36px; height:36px; border-radius:50%; background:#153D32; color:#fff; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.8rem; font-weight:700;">ME</div>' : ''}
    `;

    msgDiv.innerHTML = content;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'aiTypingIndicator';
    typingDiv.style.cssText = 'display: flex; gap: 1rem; margin-bottom: 1.5rem;';
    typingDiv.innerHTML = `
      <div style="width:36px; height:36px; border-radius:50%; background:#D53A74; color:#fff; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.8rem; font-weight:700;">TLC</div>
      <div style="background:#fff; padding: 1rem 1.5rem; border-radius:16px; border: 1px solid rgba(0,0,0,0.08);" class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function hideTypingIndicator() {
    const indicator = document.getElementById('aiTypingIndicator');
    if (indicator) indicator.remove();
  }

  function handleSend(userQuery) {
    const query = userQuery || chatInput.value.trim();
    if (!query) return;

    appendMessage(query, true);
    if (!userQuery) chatInput.value = '';

    showTypingIndicator();

    setTimeout(() => {
      hideTypingIndicator();
      let replyKey = 'default';
      const qLower = query.toLowerCase();

      if (qLower.includes('color') || qLower.includes('colour')) replyKey = 'color';
      else if (qLower.includes('porosity')) replyKey = 'porosity';
      else if (qLower.includes('consultation')) replyKey = 'consultation';
      else if (qLower.includes('assignment') || qLower.includes('due')) replyKey = 'assignments';

      appendMessage(responses[replyKey], false);
    }, 1200);
  }

  sendBtn.addEventListener('click', () => handleSend());
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  promptButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const promptText = btn.getAttribute('data-ai-prompt');
      handleSend(promptText);
    });
  });
}
