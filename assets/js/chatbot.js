/* ==========================================================================
   WEBRION GROQ AI CHATBOT ASSISTANT
   Smart assistant with Groq API Integration & instant prompt capabilities
   ========================================================================== */

class WebrionGroqBot {
  constructor() {
    this.apiKey = localStorage.getItem('webrion-groq-key') || '';
    this.model = 'llama-3.3-70b-versatile';
    this.messages = [];
    this.initUI();
  }

  initUI() {
    const trigger = document.getElementById('chatbotTrigger');
    const windowEl = document.getElementById('chatbotWindow');
    const closeBtn = document.getElementById('chatbotClose');
    const sendBtn = document.getElementById('chatSendBtn');
    const input = document.getElementById('chatInput');
    const chips = document.querySelectorAll('.chip-btn');
    const settingsToggle = document.getElementById('groqSettingsBtn');
    const apiKeyInput = document.getElementById('groqApiKeyInput');
    const saveKeyBtn = document.getElementById('saveGroqKeyBtn');

    if (trigger && windowEl) {
      trigger.addEventListener('click', () => {
        windowEl.classList.toggle('open');
      });
    }

    if (closeBtn && windowEl) {
      closeBtn.addEventListener('click', () => {
        windowEl.classList.remove('open');
      });
    }

    if (sendBtn && input) {
      sendBtn.addEventListener('click', () => this.handleUserSend());
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.handleUserSend();
      });
    }

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const text = chip.innerText;
        if (input) {
          input.value = text;
          this.handleUserSend();
        }
      });
    });

    if (settingsToggle) {
      settingsToggle.addEventListener('click', () => {
        const drawer = document.getElementById('groqSettingsDrawer');
        if (drawer) drawer.style.display = drawer.style.display === 'block' ? 'none' : 'block';
      });
    }

    if (saveKeyBtn && apiKeyInput) {
      if (this.apiKey) apiKeyInput.value = this.apiKey;
      saveKeyBtn.addEventListener('click', () => {
        this.apiKey = apiKeyInput.value.trim();
        localStorage.setItem('webrion-groq-key', this.apiKey);
        alert('Groq API Key saved successfully! The bot will now use Groq Cloud AI.');
        const drawer = document.getElementById('groqSettingsDrawer');
        if (drawer) drawer.style.display = 'none';
      });
    }

    // Greet User on Load
    this.addBotMessage("Hi there! 👋 I am the **Webrion Groq AI Assistant**. How can I help you grow your business or complete your student project today?");
  }

  handleUserSend() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    this.addUserMessage(text);
    input.value = '';

    // Show typing indicator
    const typingId = this.addTypingIndicator();

    if (this.apiKey) {
      this.fetchGroqResponse(text, typingId);
    } else {
      setTimeout(() => {
        this.removeTypingIndicator(typingId);
        const reply = this.generateLocalAIResponse(text);
        this.addBotMessage(reply);
      }, 700);
    }
  }

  addUserMessage(text) {
    const container = document.getElementById('chatbotMessages');
    if (!container) return;

    const msg = document.createElement('div');
    msg.className = 'chat-msg user';
    msg.innerText = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;

    this.messages.push({ role: 'user', content: text });
  }

  addBotMessage(text) {
    const container = document.getElementById('chatbotMessages');
    if (!container) return;

    const msg = document.createElement('div');
    msg.className = 'chat-msg bot';
    msg.innerHTML = this.parseMarkdown(text);
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;

    this.messages.push({ role: 'assistant', content: text });
  }

  addTypingIndicator() {
    const container = document.getElementById('chatbotMessages');
    if (!container) return null;

    const id = 'typing_' + Date.now();
    const msg = document.createElement('div');
    msg.className = 'chat-msg bot';
    msg.id = id;
    msg.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> Groq AI is thinking...`;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    return id;
  }

  removeTypingIndicator(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  async fetchGroqResponse(prompt, typingId) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            {
              role: 'system',
              content: 'You are the official Groq-powered AI Assistant for Webrion, a software agency specializing in Business Websites, E-Commerce, Portfolios, Student Projects, AI Integrations, and Mobile Apps. Tagline: We Build. You Grow. Business Packages start at ₹1,999. Student Packages start at ₹2,999. WhatsApp: +91 90879 23641, Email: webrion.studio@gmail.com. Keep answers professional, enthusiastic, concise, and helpful.'
            },
            ...this.messages.slice(-6)
          ],
          temperature: 0.7,
          max_tokens: 300
        })
      });

      this.removeTypingIndicator(typingId);

      if (response.ok) {
        const data = await response.json();
        const content = data.choices[0].message.content;
        this.addBotMessage(content);
      } else {
        const errData = await response.json();
        this.addBotMessage(`⚠️ Groq API Error: ${errData.error?.message || 'Invalid API Key'}. Switching to local bot.`);
        this.addBotMessage(this.generateLocalAIResponse(prompt));
      }
    } catch (err) {
      this.removeTypingIndicator(typingId);
      this.addBotMessage("⚠️ Network error while connecting to Groq. Here is the response:");
      this.addBotMessage(this.generateLocalAIResponse(prompt));
    }
  }

  generateLocalAIResponse(text) {
    const q = text.toLowerCase();

    if (q.includes('price') || q.includes('cost') || q.includes('package') || q.includes('rate')) {
      return `💰 **Webrion Offer Packages:**\n\n` +
             `• **Business Website Basic:** ₹1,999\n` +
             `• **Business Website Standard:** ₹4,999\n` +
             `• **E-Commerce Website:** ₹9,999\n` +
             `• **Student Project Basic:** ₹2,999\n` +
             `• **Student Project Standard:** ₹4,999\n` +
             `• **Student Project Premium:** ₹7,999\n\n` +
             `Interested? You can directly message us on [WhatsApp](https://wa.me/919087923641)!`;
    }

    if (q.includes('student') || q.includes('college') || q.includes('academic') || q.includes('project')) {
      return `🎓 **Student Projects & Portfolios at Webrion:**\n\n` +
             `We help students build high-quality mini/major projects & professional portfolio websites that impress during college vivas, internships, and placements!\n\n` +
             `• Source Code + Deployment\n` +
             `• Full Documentation & PPT\n` +
             `• AI Features, Auth, & Payment Gateways\n\n` +
             `Check out our [Student Projects Page](student-projects.html)!`;
    }

    if (q.includes('contact') || q.includes('whatsapp') || q.includes('phone') || q.includes('email') || q.includes('call')) {
      return `📞 **Direct Contact Details:**\n\n` +
             `• **WhatsApp:** [+91 90879 23641](https://wa.me/919087923641)\n` +
             `• **Email:** webrion.studio@gmail.com / support@webrion.com\n` +
             `• **Instagram:** @webrion_studio\n\n` +
             `We respond within minutes!`;
    }

    if (q.includes('service') || q.includes('what do you do') || q.includes('build') || q.includes('app')) {
      return `⚡ **Webrion Services:**\n\n` +
             `1. Business & E-Commerce Websites\n` +
             `2. Student Projects & Portfolios\n` +
             `3. Groq AI & Chatbot Integrations\n` +
             `4. Flutter Mobile App Development\n` +
             `5. Admin Dashboards & SEO Optimization\n\n` +
             `Explore all on our [Services Page](services.html)!`;
    }

    return `Thanks for asking! Webrion is a software company specializing in Business Websites, E-Commerce, Student Projects, AI Chatbots, and Mobile Apps.\n\n` +
           `Would you like to get a free quote or chat directly on **WhatsApp (+91 90879 23641)**?`;
  }

  parseMarkdown(str) {
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: var(--accent-pink); font-weight:700;">$1</a>')
      .replace(/\n/g, '<br/>');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.webrionBot = new WebrionGroqBot();
});
