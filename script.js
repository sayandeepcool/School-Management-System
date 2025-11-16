// Lucide Icons (as a temporary measure for a single file)
const icons = {
    Plus: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
    Edit: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-edit"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="M15 5l4 4"/></svg>`,
    Trash2: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`,
    X: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    School: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school"><path d="M14 22v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4"/><path d="M18 10V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4"/><path d="M4 10h16"/><path d="m18 10 2-4L12 2 4 6l2 4"/><path d="M12 2v8"/></svg>`,
    User: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    ClipboardList: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
    TrendingUp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    DollarSign: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    Bell: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
    Megaphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-megaphone"><path d="m3 11 18-5v12L3 18V11Z"/><path d="M7 11v-2a3 3 0 0 1 6 0v2"/><path d="M11 11v2a3 3 0 0 0 6 0v-2"/></svg>`,
    ArrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
    Check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucude-check"><path d="M20 6 9 17l-5-5"/></svg>`,
    Minus: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>`
};

const studentData = [
    {
        id: 1, name: 'Alice Johnson', studentId: 'S-1001', grade: 10,
        email: 'alice.j@school.edu', phone: '555-123-4567',
        avatar: 'https://placehold.co/100x100/A855F7/FFFFFF?text=A',
        performance: [
            { subject: 'Math', score: 90 }, { subject: 'Science', score: 85 }, { subject: 'English', score: 95 }
        ],
        assignments: [
            { id: 101, title: 'Algebra I Homework', deadline: 'Oct 25, 2023', status: 'Submitted', feedback: 'Great work!' },
            { id: 102, title: 'Lab Report', deadline: 'Oct 28, 2023', status: 'Pending', feedback: 'Pending submission.' }
        ],
        exams: [
            { name: 'Mid-term Exam', score: 92, reportCardUrl: '#' }
        ],
        attendance: { present: 45, absent: 2, totalClasses: 50, records: [{month: 'Aug 2024', present: 18, total: 20}, {month: 'Sep 2024', present: 27, total: 30}] }, 
        fees: [ 
            { month: 'Sep 2024', amount: 1200, status: 'Paid', date: 'Sep 1, 2024' },
            { month: 'Oct 2024', amount: 1200, status: 'Pending', date: '' }
        ]
    },
    {
        id: 2, name: 'Bob Williams', studentId: 'S-1002', grade: 11,
        email: 'bob.w@school.edu', phone: '555-234-5678',
        avatar: 'https://placehold.co/100x100/8B5CF6/FFFFFF?text=B',
        performance: [
            { subject: 'Math', score: 80 }, { subject: 'Science', score: 92 }, { subject: 'English', score: 88 }
        ],
        assignments: [
            { id: 103, title: 'History Essay', deadline: 'Oct 26, 2023', status: 'Submitted', feedback: 'Completed by student.' },
            { id: 104, title: 'Physics Problems', deadline: 'Oct 29, 2023', status: 'Pending', feedback: 'Pending submission.' }
        ],
        exams: [
            { name: 'Mid-term Exam', score: 85, reportCardUrl: '#' }
        ],
        attendance: { present: 43, absent: 4, totalClasses: 50, records: [{month: 'Aug 2024', present: 17, total: 20}, {month: 'Sep 2024', present: 26, total: 30}] }, 
        fees: [
            { month: 'Sep 2024', amount: 1500, status: 'Paid', date: 'Sep 5, 2024' },
            { month: 'Oct 2024', amount: 1500, status: 'Paid', date: 'Oct 1, 2024' }
        ]
    },
    {
        id: 3, name: 'Charlie Brown', studentId: 'S-1003', grade: 10,
        email: 'charlie.b@school.edu', phone: '555-345-6789',
        avatar: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=C',
        performance: [
            { subject: 'Math', score: 75 }, { subject: 'Science', score: 80 }, { subject: 'English', score: 70 }
        ],
        assignments: [
            { id: 105, title: 'Biology Project', deadline: 'Nov 1, 2023', status: 'Pending', feedback: 'Pending submission.' }
        ],
        exams: [
            { name: 'Mid-term Exam', score: 78, reportCardUrl: '#' }
        ],
        attendance: { present: 40, absent: 7, totalClasses: 50, records: [{month: 'Aug 2024', present: 15, total: 20}, {month: 'Sep 2024', present: 25, total: 30}] }, 
        fees: [
            { month: 'Sep 2024', amount: 1200, status: 'Pending', date: '' },
            { month: 'Oct 2024', amount: 1200, status: 'Pending', date: '' }
        ]
    },
];

const noticeData = [
    { id: 1, title: 'Parent-Teacher Meeting', date: 'November 15, 2023', text: 'Important meeting to discuss student progress.' },
    { id: 2, title: 'Annual School Festival', date: 'December 1, 2023', text: 'Join us for a day of fun, games, and performances.' }
];

// NEW: Message Data Structure
const messageData = [
    { id: 1, sender: 'Teacher', recipient: 'Parent', subject: 'PTM Reminder', message: 'The Parent-Teacher Meeting is next Wednesday.', date: 'Nov 1, 2025' },
    { id: 2, sender: 'Parent', recipient: 'Teacher', subject: 'Absence Request', message: 'Alice will be absent for two days next week due to a family trip.', date: 'Nov 3, 2025' }
];

let currentView = 'list';
let selectedStudent = null;
let currentUserType = 'teacher'; // DEFAULT: TEACHER VIEW

const dashboardContainer = document.getElementById('dashboard-container');
const userTypeSelect = document.getElementById('user-type-select');

// Student Modal elements
const modalBackdrop = document.getElementById('modal-backdrop');
const modalTitle = document.getElementById('modal-title');
const studentForm = document.getElementById('student-form');
const formName = document.getElementById('name');
const formGrade = document.getElementById('grade');
const formEmail = document.getElementById('email');
const formPhone = document.getElementById('phone');
const formSubmitBtn = document.getElementById('form-submit-btn');
const modalCloseBtn = document.getElementById('modal-close-btn');

// Mark Modal elements
const markModalBackdrop = document.getElementById('mark-modal-backdrop');
const markForm = document.getElementById('mark-form');
const markSubject = document.getElementById('subject');
const markScore = document.getElementById('score');
const markModalCloseBtn = document.getElementById('mark-modal-close-btn');

// Notice Modal elements
const noticeModalBackdrop = document.getElementById('notice-modal-backdrop');
const noticeForm = document.getElementById('notice-form');
const noticeTitleInput = document.getElementById('notice-title');
const noticeDateInput = document.getElementById('notice-date');
const noticeTextInput = document.getElementById('notice-text');
const noticeModalCloseBtn = document.getElementById('notice-modal-close-btn');

// Fee Modal elements
const feeModalBackdrop = document.getElementById('fee-modal-backdrop');
const feeForm = document.getElementById('fee-form');
const feeMonthInput = document.getElementById('fee-month');
const feeAmountInput = document.getElementById('fee-amount');
const feeStatusInput = document.getElementById('fee-status');
const feeDateInput = document.getElementById('fee-date');
const feeModalCloseBtn = document.getElementById('fee-modal-close-btn');

// Attendance Modal elements
const attModalBackdrop = document.getElementById('att-modal-backdrop');
const attForm = document.getElementById('att-form');
const attMonthInput = document.getElementById('att-month');
const attPresentInput = document.getElementById('att-present');
const attTotalInput = document.getElementById('att-total');
const attModalCloseBtn = document.getElementById('att-modal-close-btn');

// Assignment Modal elements
const assignmentModalBackdrop = document.getElementById('assignment-modal-backdrop');
const assignmentForm = document.getElementById('assignment-form');
const assignmentTitleInput = document.getElementById('assignment-title');
const assignmentDeadlineInput = document.getElementById('assignment-deadline');
const assignmentModalCloseBtn = document.getElementById('assignment-modal-close-btn');

// Contact Modal elements
const contactModalBackdrop = document.getElementById('contact-modal-backdrop');
const contactForm = document.getElementById('contact-form');
const contactSubject = document.getElementById('contact-subject');
const contactMessage = document.getElementById('contact-message');
const contactModalCloseBtn = document.getElementById('contact-modal-close-btn');

// Message Send Modal elements
const messageSendModalBackdrop = document.getElementById('message-send-modal-backdrop');
const messageSendForm = document.getElementById('message-send-form');
const messageSendTitle = document.getElementById('message-send-title');
const messageSendSubjectInput = document.getElementById('message-send-subject');
const messageSendTextInput = document.getElementById('message-send-text');
const messageSendModalCloseBtn = document.getElementById('message-send-modal-close-btn');


function getIcon(name) {
    return icons[name] || '';
}

function openModal(student = null) {
    modalBackdrop.classList.remove('hidden');
    if (student) {
        modalTitle.textContent = 'Edit Student';
        formName.value = student.name;
        formGrade.value = student.grade;
        formEmail.value = student.email;
        formPhone.value = student.phone;
        formSubmitBtn.textContent = 'Save Changes';
        studentForm.dataset.mode = 'edit';
        studentForm.dataset.id = student.id;
    } else {
        modalTitle.textContent = 'Add New Student';
        studentForm.reset();
        formSubmitBtn.textContent = 'Add Student';
        studentForm.dataset.mode = 'add';
        delete studentForm.dataset.id;
    }
}

function closeModal() {
    modalBackdrop.classList.add('hidden');
}

function openMarkModal() {
    markModalBackdrop.classList.remove('hidden');
    markForm.reset();
}

function closeMarkModal() {
    markModalBackdrop.classList.add('hidden');
}

function openNoticeModal() {
    noticeModalBackdrop.classList.remove('hidden');
    noticeForm.reset();
    noticeDateInput.value = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function closeNoticeModal() {
    noticeModalBackdrop.classList.add('hidden');
}

// Fee Modal Functions
function openFeeModal() {
    feeModalBackdrop.classList.remove('hidden');
    feeForm.reset();
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    feeMonthInput.value = nextMonth.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    feeAmountInput.value = 1200; 
}

function closeFeeModal() {
    feeModalBackdrop.classList.add('hidden');
}

function saveFee(event) {
    event.preventDefault();
    const newFee = {
        month: feeMonthInput.value,
        amount: parseInt(feeAmountInput.value),
        status: feeStatusInput.value,
        date: feeDateInput.value,
    };
    
    const student = studentData.find(s => s.id === selectedStudent.id);
    if (student) {
        const existingIndex = student.fees.findIndex(f => f.month === newFee.month);
        
        if (existingIndex !== -1) {
            Object.assign(student.fees[existingIndex], newFee);
        } else {
            student.fees.push(newFee);
        }
        
        closeFeeModal();
        renderDashboard();
    } else {
        console.error('Student not found for fee update!');
    }
}

// Attendance Modal Functions
function openAttModal() {
    attModalBackdrop.classList.remove('hidden');
    attForm.reset();
    const today = new Date();
    attMonthInput.value = today.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    attTotalInput.value = 20;
}

function closeAttModal() {
    attModalBackdrop.classList.add('hidden');
}

function saveAttendance(event) {
    event.preventDefault();
    const newAtt = {
        month: attMonthInput.value,
        present: parseInt(attPresentInput.value),
        total: parseInt(attTotalInput.value),
    };
    
    const student = studentData.find(s => s.id === selectedStudent.id);
    if (student) {
        const existingIndex = student.attendance.records.findIndex(r => r.month === newAtt.month);
        
        if (existingIndex !== -1) {
            Object.assign(student.attendance.records[existingIndex], newAtt);
        } else {
            student.attendance.records.push(newAtt);
        }

        // Recalculate overall attendance summary
        let totalPresent = 0;
        let totalClasses = 0;
        student.attendance.records.forEach(r => {
            totalPresent += r.present;
            totalClasses += r.total;
        });
        
        student.attendance.present = totalPresent;
        student.attendance.absent = totalClasses - totalPresent;
        student.attendance.totalClasses = totalClasses;
        
        closeAttModal();
        renderDashboard();
    } else {
        console.error('Student not found for attendance update!');
    }
}

function saveMark(event) {
    event.preventDefault();
    const newMark = {
        subject: markSubject.value,
        score: parseInt(markScore.value)
    };
    
    const student = studentData.find(s => s.id === selectedStudent.id);
    if (student) {
        student.performance.push(newMark);
        closeMarkModal();
        renderDashboard();
    } else {
        console.error('Student not found!');
    }
}

function saveNotice(event) {
    event.preventDefault();
    const newId = noticeData.length > 0 ? Math.max(...noticeData.map(n => n.id)) + 1 : 1;
    
    const newNotice = {
        id: newId,
        title: noticeTitleInput.value,
        date: noticeDateInput.value, 
        text: noticeTextInput.value
    };
    
    noticeData.push(newNotice);
    closeNoticeModal();
    renderDashboard();
}

// Assignment Modal Functions
function openAssignmentModal() {
    assignmentModalBackdrop.classList.remove('hidden');
    assignmentForm.reset();
    assignmentDeadlineInput.value = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function closeAssignmentModal() {
    assignmentModalBackdrop.classList.add('hidden');
}

function saveAssignment(event) {
    event.preventDefault();
    
    // Find ALL students to update their assignment list
    const maxGlobalId = studentData.flatMap(s => s.assignments).reduce((max, a) => Math.max(max, a.id), 100);

    studentData.forEach(student => {
        const newAssignment = {
            id: maxGlobalId + 1, // Simple ID increment for demo purposes
            title: assignmentTitleInput.value,
            deadline: assignmentDeadlineInput.value, 
            status: 'Pending', // New assignments start as Pending
            feedback: 'Pending submission.'
        };
        
        student.assignments.push(newAssignment);
    });
    
    closeAssignmentModal();
    renderDashboard(); 
}

function toggleAssignmentStatus(studentId, assignmentId) {
    const student = studentData.find(s => s.id === studentId);
    if (!student) return;

    const assignment = student.assignments.find(a => a.id === assignmentId);
    if (!assignment) return;

    // Toggle status: Submitted -> Pending, Pending -> Submitted
    assignment.status = (assignment.status === 'Submitted') ? 'Pending' : 'Submitted';
    
    // Auto-update feedback
    if (assignment.status === 'Submitted') {
         assignment.feedback = 'Completed by student.';
    } else {
         assignment.feedback = 'Pending submission.';
    }
    
    renderDashboard();
}

function saveStudent(event) {
    event.preventDefault();
    const mode = studentForm.dataset.mode;
    const newStudentData = {
        name: formName.value,
        grade: parseInt(formGrade.value),
        email: formEmail.value,
        phone: formPhone.value,
        avatar: `https://placehold.co/100x100/4F46E5/FFFFFF?text=${formName.value.charAt(0).toUpperCase()}`
    };

    if (mode === 'add') {
        const newId = studentData.length > 0 ? Math.max(...studentData.map(s => s.id)) + 1 : 1;
        const newStudent = {
            id: newId,
            studentId: `S-${1000 + newId}`,
            ...newStudentData,
            performance: [],
            assignments: [],
            exams: [],
            // Initialize new data structures
            attendance: { present: 0, absent: 0, totalClasses: 0, records: [] },
            fees: []
        };
        studentData.push(newStudent);
    } else if (mode === 'edit') {
        const studentId = parseInt(studentForm.dataset.id);
        const index = studentData.findIndex(s => s.id === studentId);
        if (index !== -1) {
            Object.assign(studentData[index], newStudentData);
        }
    }
    closeModal();
    renderDashboard();
}

function deleteStudent(id) {
    const confirmed = confirm('Are you sure you want to delete this student?');
    if (confirmed) {
        const index = studentData.findIndex(s => s.id === id);
        if (index !== -1) {
            studentData.splice(index, 1);
            renderDashboard();
        }
    }
}

// NEW: Message Modal Functions
function openMessageSendModal(isFromParent) {
    messageSendModalBackdrop.classList.remove('hidden');
    messageSendForm.reset();
    
    if (isFromParent) {
        messageSendTitle.textContent = "Message the Teacher";
        messageSendForm.dataset.senderRole = 'Parent';
    } else { // From Teacher
        messageSendTitle.textContent = "Message the Parent";
        messageSendForm.dataset.senderRole = 'Teacher';
    }
}

function closeMessageSendModal() {
    messageSendModalBackdrop.classList.add('hidden');
}

function sendMessage(event) {
    event.preventDefault();
    
    const sender = messageSendForm.dataset.senderRole;
    const recipient = sender === 'Parent' ? 'Teacher' : 'Parent';
    
    const newMessage = {
        id: messageData.length + 1,
        sender: sender,
        recipient: recipient,
        subject: messageSendSubjectInput.value,
        message: messageSendTextInput.value,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    
    messageData.push(newMessage);
    
    console.log(`--- MOCK MESSAGE SENT ---`);
    console.log(`From: ${sender} | To: ${recipient} | Subject: ${newMessage.subject}`);
    
    alert(`Message sent to ${recipient} successfully!`);
    
    closeMessageSendModal();
    renderDashboard(); // Re-render to update the respective inboxes
}

function renderStudentList() {
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.remove();
    }
    
    // Conditionally render the "Add Student" button only for Teacher View
    const addStudentButtonHtml = currentUserType === 'teacher' ? `
        <button id="add-student-btn" class="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-2xl shadow-indigo-500/50 hover:bg-indigo-700 hover:shadow-indigo-600/60 transition duration-300 flex items-center space-x-2 whitespace-nowrap active:scale-95 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            <span>Add Student</span>
        </button>
    ` : '';


    const studentListHtml = `
        ${addStudentButtonHtml}

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
                <div class="mb-6">
                    <input type="text" id="search-input" placeholder="Search by name or ID..." class="w-full p-4 border-2 border-slate-300 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all duration-300 shadow-lg 
                        dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-slate-400 dark:focus:ring-indigo-700">
                </div>
                <div id="student-cards" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                </div>
            </div>

            <div class="md:col-span-1">
                <div class="bg-indigo-50 p-6 rounded-2xl shadow-custom border border-indigo-100 
                    dark:bg-indigo-900 dark:border-indigo-800">
                    <h3 class="text-xl font-bold flex items-center justify-between mb-4 text-indigo-800 dark:text-indigo-200">
                        <span class="flex items-center space-x-2">${getIcon('Megaphone')}<span>Notice Board</span></span>
                        ${currentUserType === 'teacher' ? 
                            `<button id="add-notice-btn" class="text-sm font-bold bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-full hover:bg-indigo-300 transition-colors active:scale-95 dark:bg-indigo-700 dark:text-white dark:hover:bg-indigo-600">
                                ${getIcon('Plus')}
                                <span>Add</span>
                            </button>` 
                            : ''}
                    </h3>
                    <div id="notice-board" class="space-y-4">
                    </div>
                </div>
            </div>
        </div>
    `;
    dashboardContainer.innerHTML = studentListHtml;

    const searchInput = document.getElementById('search-input');
    const newAddStudentBtn = document.getElementById('add-student-btn');
    const addNoticeBtn = document.getElementById('add-notice-btn');

    // Attach listener to the dynamically created "Add Student" button
    if (newAddStudentBtn) {
        newAddStudentBtn.addEventListener('click', openModal);
    }
    // Attach listener to the dynamically created "Add Notice" button (Teacher only)
    if (addNoticeBtn) {
        addNoticeBtn.addEventListener('click', openNoticeModal);
    }


    searchInput.addEventListener('input', (e) => {
        const filteredStudents = studentData.filter(student =>
            student.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            student.studentId.toLowerCase().includes(e.target.value.toLowerCase())
        );
        renderStudentCards(filteredStudents);
    });

    renderStudentCards(studentData);
    renderNotices(noticeData);
}

function renderStudentCards(students) {
    const studentCardsContainer = document.getElementById('student-cards');
    studentCardsContainer.innerHTML = '';
    if (students.length === 0) {
        studentCardsContainer.innerHTML = `<p class="text-center text-slate-500 col-span-full py-8 dark:text-slate-400">No students found. Add one to get started!</p>`;
        return;
    }
    students.forEach(student => {
        const card = document.createElement('div');
        
        // Only Teacher can Edit/Delete student records from the list view
        let actionButtons = '';
        if (currentUserType === 'teacher') {
            actionButtons = `
                <div class="flex space-x-2 flex-shrink-0">
                    <button class="w-10 h-10 flex items-center justify-center p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors edit-btn shadow-md active:scale-95" data-id="${student.id}" aria-label="Edit ${student.name}">
                        ${getIcon('Edit')}
                    </button>
                    <button class="w-10 h-10 flex items-center justify-center p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors delete-btn shadow-md active:scale-95" data-id="${student.id}" aria-label="Delete ${student.name}">
                        ${getIcon('Trash2')}
                    </button>
                </div>
            `;
        }


        card.className = 'bg-white rounded-2xl p-6 shadow-custom hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-200 hover:ring-4 hover:ring-indigo-100 dark:bg-slate-700 dark:border-slate-600 dark:hover:ring-indigo-800/50';
        card.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4 flex-grow">
                    <img src="${student.avatar}" alt="${student.name}'s avatar" class="w-16 h-16 rounded-full border-4 border-indigo-500 shadow-md p-0.5 object-cover">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white">${student.name}</h3>
                        <p class="text-slate-600 dark:text-slate-300">Grade: <span class="font-semibold text-indigo-700">${student.grade}</span></p>
                        <p class="text-sm text-slate-400">ID: ${student.studentId}</p>
                    </div>
                </div>
                ${actionButtons}
            </div>
        `;
        studentCardsContainer.appendChild(card);
        card.querySelector('.flex-grow').addEventListener('click', () => {
            selectedStudent = student;
            currentView = 'details';
            renderDashboard();
        });

        if (currentUserType === 'teacher') {
            card.querySelector('.edit-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(student);
            });
            card.querySelector('.delete-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                deleteStudent(student.id);
            });
        }
    });
}

function renderNotices(notices) {
    const noticeBoardContainer = document.getElementById('notice-board');
    noticeBoardContainer.innerHTML = '';
    notices.forEach(notice => {
        const noticeCard = document.createElement('div');
        noticeCard.className = 'p-4 bg-white rounded-xl shadow-sm border-l-4 border-indigo-400 dark:bg-indigo-800 dark:border-indigo-600';
        noticeCard.innerHTML = `
            <h4 class="font-bold text-lg text-slate-800 dark:text-white">${notice.title}</h4>
            <p class="text-sm text-indigo-500 mb-2 dark:text-indigo-300">${notice.date}</p>
            <p class="text-slate-600 text-sm dark:text-slate-200">${notice.text}</p>
        `;
        noticeBoardContainer.appendChild(noticeCard);
    });
}

// Helper function to render Fees/Attendance tables. Includes update buttons ONLY if showFeeAttUpdateButtons is true.
function renderManagementTables(student, showFeeAttUpdateButtons = false) {
    // --- FEES TABLE HTML ---
    const feesTable = student.fees.map(f => `
        <tr class="border-t border-slate-200 dark:border-slate-600">
            <td class="p-4 font-semibold text-slate-800 dark:text-white">${f.month}</td>
            <td class="p-4 text-slate-600 dark:text-slate-300">$${f.amount}</td>
            <td class="p-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold ${f.status === 'Paid' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}">
                    ${f.status}
                </span>
            </td>
            <td class="p-4 text-sm text-slate-500 dark:text-slate-400">${f.date || 'N/A'}</td>
        </tr>
    `).join('');
    
    const feesUpdateBtn = showFeeAttUpdateButtons ? `
        <button id="add-fee-btn" class="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:bg-indigo-700 transition duration-200 flex items-center space-x-2 text-sm active:scale-95">
            ${getIcon('Plus')}
            <span>Update Fee</span>
        </button>
    ` : '';
    
    // --- ATTENDANCE TABLE HTML ---
    const attRecords = student.attendance.records.map(r => `
        <tr class="border-t border-slate-200 dark:border-slate-600">
            <td class="p-4 font-semibold text-slate-800 dark:text-white">${r.month}</td>
            <td class="p-4 text-slate-600 dark:text-slate-300">${r.present} / ${r.total}</td>
            <td class="p-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold ${r.total > 0 && r.present / r.total > 0.85 ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'}">
                    ${r.total > 0 ? ((r.present / r.total) * 100).toFixed(1) : 0}%
                </span>
            </td>
        </tr>
    `).join('');

    const attUpdateBtn = showFeeAttUpdateButtons ? `
        <button id="add-att-btn" class="bg-teal-600 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:bg-teal-700 transition duration-200 flex items-center space-x-2 text-sm active:scale-95">
            ${getIcon('Plus')}
            <span>Update Att.</span>
        </button>
    ` : '';

    return `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="col-span-1">
                <h3 class="text-2xl font-bold mb-5 flex items-center justify-between">
                    <span class="flex items-center space-x-2 text-slate-800 dark:text-white">
                        ${getIcon('DollarSign')}<span>Fees Tracker</span>
                    </span>
                    ${feesUpdateBtn}
                </h3>
                <div class="bg-white rounded-2xl p-0 shadow-custom border border-slate-200 dark:bg-slate-700 dark:border-slate-600 overflow-x-auto">
                    <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-600">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-800">
                                <th class="p-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider dark:text-slate-400">Month</th>
                                <th class="p-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider dark:text-slate-400">Amount</th>
                                <th class="p-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider dark:text-slate-400">Status</th>
                                <th class="p-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider dark:text-slate-400">Date Paid</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 dark:divide-slate-600">
                            ${feesTable || `<tr class="p-4"><td colspan="4" class="p-4 text-center text-slate-500 dark:text-slate-400">No fee records found.</td></tr>`}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col-span-1">
                <h3 class="text-2xl font-bold mb-5 flex items-center justify-between">
                    <span class="flex items-center space-x-2 text-slate-800 dark:text-white">
                        ${getIcon('ClipboardList')}<span>Monthly Attendance</span>
                    </span>
                    ${attUpdateBtn}
                </h3>
                <div class="bg-white rounded-2xl p-0 shadow-custom border border-slate-200 dark:bg-slate-700 dark:border-slate-600 overflow-x-auto">
                    <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-600">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-800">
                                <th class="p-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider dark:text-slate-400">Month</th>
                                <th class="p-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider dark:text-slate-400">P / Total</th>
                                <th class="p-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider dark:text-slate-400">Percentage</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 dark:divide-slate-600">
                            ${attRecords || `<tr class="p-4"><td colspan="3" class="p-4 text-center text-slate-500 dark:text-slate-400">No attendance records found.</td></tr>`}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// Helper function for performance and assignments.
function renderPerformanceAndAssignments(student, showAddMarkButton) {
    const addMarkButtonHTML = showAddMarkButton ? `
        <button id="add-mark-btn" class="bg-teal-600 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:bg-teal-700 transition duration-200 flex items-center space-x-2 text-sm active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            <span>Add Mark</span>
        </button>
    ` : '';
    
    return `
        <div>
            <h3 class="text-2xl font-bold mb-5 flex items-center justify-between">
                <span class="flex items-center space-x-2 text-slate-800 dark:text-white">
                    ${getIcon('TrendingUp')}<span>${showAddMarkButton ? 'Performance Management' : 'Your Performance'}</span>
                </span>
                ${addMarkButtonHTML}
            </h3>
            <div class="bg-white rounded-2xl p-6 shadow-custom border border-slate-200 dark:bg-slate-700 dark:border-slate-600">
                <div class="grid gap-y-6">
                    <div class="relative grid grid-cols-4 h-full gap-x-2 opacity-50 z-0">
                        <div class="border-r border-gray-200 dark:border-slate-600"></div>
                        <div class="border-r border-gray-200 dark:border-slate-600"></div>
                        <div class="border-r border-gray-200 dark:border-slate-600"></div>
                        <div class="border-r border-gray-200 dark:border-slate-600"></div>
                    </div>
                    <div class="relative flex justify-between text-xs font-semibold text-gray-500 -mt-2 dark:text-slate-400">
                        <span>0</span>
                        <span>25</span>
                        <span>50</span>
                        <span>75</span>
                        <span>100</span>
                    </div>
                    ${student.performance.map(p => `
                        <div class="flex items-center space-x-4">
                            <p class="text-base text-slate-800 font-semibold w-24 flex-shrink-0 dark:text-white">${p.subject}</p>
                            <div class="flex-1 bg-slate-200 rounded-lg h-8 relative overflow-hidden group dark:bg-slate-600">
                                <div class="absolute inset-0 bg-teal-500 transition-all duration-500 group-hover:bg-teal-600" style="width: ${p.score}%;">
                                </div>
                                <div class="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold text-white mix-blend-screen transition-all duration-300 whitespace-nowrap z-10">${p.score}%</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Helper function to render Assignment section (including the update button/toggle logic)
function renderAssignmentSection(student, showUpdateButton, showStatusToggle) {
    const assignmentsUpdateBtn = showUpdateButton ? `
        <button id="add-assignment-btn" class="bg-orange-600 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:bg-orange-700 transition duration-200 flex items-center space-x-2 text-sm active:scale-95">
            ${getIcon('Plus')}
            <span>Post Assignment</span>
        </button>
    ` : '';
    
    return `
        <div>
            <h3 class="text-2xl font-bold mb-5 flex items-center justify-between">
                <span class="flex items-center space-x-2 text-slate-800 dark:text-white">
                    ${getIcon('ClipboardList')}<span>Homework & Assignments</span>
                </span>
                ${assignmentsUpdateBtn}
            </h3>
            <div class="bg-white rounded-2xl shadow-custom border border-slate-200 divide-y divide-slate-200 dark:bg-slate-700 dark:border-slate-600 dark:divide-slate-600">
                ${student.assignments.map(a => {
                    const statusClass = a.status === 'Submitted' ? 'bg-green-500 text-white shadow-sm' : 'bg-yellow-100 text-yellow-700 border border-yellow-300';
                    
                    const toggleButton = showStatusToggle ? `
                        <button class="w-10 h-10 flex items-center justify-center p-2 rounded-full transition-colors assignment-toggle-btn shadow-md active:scale-95 
                            ${a.status === 'Submitted' ? 'bg-green-200 text-green-700 hover:bg-green-300' : 'bg-red-200 text-red-700 hover:bg-red-300'}" 
                            data-student-id="${student.id}" data-assignment-id="${a.id}" aria-label="Toggle status">
                            ${a.status === 'Submitted' ? getIcon('Check') : getIcon('X')}
                        </button>
                    ` : '';
                    
                    return `
                        <div class="p-5 flex justify-between items-center hover:bg-slate-50 transition-colors dark:hover:bg-slate-600/50">
                            <div class="flex-grow">
                                <p class="font-bold text-lg text-slate-800 dark:text-white">${a.title}</p>
                                <p class="text-sm text-slate-500 dark:text-slate-400">Deadline: <span class="font-medium">${a.deadline}</span></p>
                                ${a.feedback ? `<p class="text-sm mt-1 text-teal-600 font-semibold">${a.feedback}</p>` : ''}
                            </div>
                            <div class="flex items-center space-x-3 flex-shrink-0">
                                <span class="px-3 py-1 rounded-full text-xs font-bold ${statusClass}">
                                    ${a.status}
                                </span>
                                ${toggleButton}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// Student View (Read Only)
function renderStudentDashboard(student) {
    return `
        <div class="space-y-10">
            <div class="p-8 bg-indigo-50 rounded-2xl shadow-inner border-l-4 border-indigo-500 dark:bg-indigo-900 dark:border-indigo-700">
                <h2 class="text-3xl font-extrabold mb-2 text-indigo-800 dark:text-indigo-100">Welcome, ${student.name}!</h2>
                <p class="text-slate-600 dark:text-slate-300">This is your personalized dashboard. Stay on top of your academic progress.</p>
            </div>
            
            ${renderManagementTables(student, false)}
            
            ${renderPerformanceAndAssignments(student, false)}
            
            ${renderAssignmentSection(student, false, false)}
        </div>
    `;
}

// Teacher View (Marks, Fees, Attendance, Assignments - ALL EDITABLE + MESSAGE SEND)
function renderTeacherDashboard(student) {
    const teacherInbox = messageData.filter(m => m.recipient === 'Teacher').reverse(); // Show latest first

    return `
        <div class="space-y-10">
            <div class="p-8 bg-yellow-50 rounded-2xl shadow-inner border-l-4 border-yellow-500 dark:bg-yellow-900 dark:border-yellow-700">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="text-3xl font-extrabold mb-2 text-yellow-800 dark:text-yellow-100">Teacher Management Portal</h2>
                        <p class="text-slate-600 dark:text-slate-300">Updating records for student: <span class="font-bold text-yellow-700">${student.name}</span>.</p>
                    </div>
                    <button id="message-send-teacher-btn" class="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-200 flex items-center space-x-1 whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7"/></svg>
                        <span>Contact Parent</span>
                    </button>
                </div>
            </div>

            <div class="col-span-2">
                <h3 class="text-2xl font-bold mb-5 text-slate-800 dark:text-white">Parent Inbox (${teacherInbox.length} Messages)</h3>
                <div class="bg-white rounded-2xl shadow-custom border border-slate-200 divide-y divide-slate-200 dark:bg-slate-700 dark:border-slate-600 dark:divide-slate-600 overflow-hidden">
                    ${teacherInbox.length > 0 ? teacherInbox.map(m => `
                        <div class="p-4 hover:bg-slate-50 dark:hover:bg-slate-600/50">
                            <p class="font-bold text-lg text-slate-800 dark:text-white">Subject: ${m.subject}</p>
                            <p class="text-sm text-slate-500 dark:text-slate-400 mb-1">From: ${m.sender} on ${m.date}</p>
                            <p class="text-slate-600 dark:text-slate-300">${m.message}</p>
                        </div>
                    `).join('') : '<p class="p-4 text-slate-500 dark:text-slate-400">No new messages.</p>'}
                </div>
            </div>


            ${renderManagementTables(student, true)} 

            ${renderPerformanceAndAssignments(student, true)} 
            
            ${renderAssignmentSection(student, true, true)}
        </div>
    `;
}

// Parent View (Data Review, Contact Teacher)
function renderParentDashboard(student) {
    const totalAttendancePct = student.attendance.totalClasses > 0 
        ? ((student.attendance.present / student.attendance.totalClasses) * 100).toFixed(1)
        : 0;

    const feesPendingCount = student.fees.filter(f => f.status === 'Pending').length;
    const totalPendingFeeAmount = student.fees
        .filter(f => f.status === 'Pending')
        .reduce((sum, f) => sum + f.amount, 0);
        
    const parentInbox = messageData.filter(m => m.recipient === 'Parent').reverse(); // Show latest first

    return `
        <div class="space-y-10">
            <div class="p-8 bg-indigo-50 rounded-2xl shadow-inner border-l-4 border-indigo-500 dark:bg-indigo-900 dark:border-indigo-700">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="text-3xl font-extrabold mb-2 text-indigo-800 dark:text-indigo-100">Welcome, Parent! (Data Review)</h2>
                        <p class="text-slate-600 dark:text-slate-300">Viewing summary and status for your child, <span class="font-bold text-indigo-700">${student.name}</span>.</p>
                    </div>
                    <button id="message-send-parent-btn" class="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200 flex items-center space-x-1 whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7"/></svg>
                        <span>Contact Teacher</span>
                    </button>
                </div>
            </div>

            <div class="col-span-2">
                <h3 class="text-2xl font-bold mb-5 text-slate-800 dark:text-white">School Communications (${parentInbox.length} Messages)</h3>
                <div class="bg-white rounded-2xl shadow-custom border border-slate-200 divide-y divide-slate-200 dark:bg-slate-700 dark:border-slate-600 dark:divide-slate-600 overflow-hidden">
                    ${parentInbox.length > 0 ? parentInbox.map(m => `
                        <div class="p-4 hover:bg-slate-50 dark:hover:bg-slate-600/50">
                            <p class="font-bold text-lg text-slate-800 dark:text-white">Subject: ${m.subject}</p>
                            <p class="text-sm text-slate-500 dark:text-slate-400 mb-1">From: ${m.sender} on ${m.date}</p>
                            <p class="text-slate-600 dark:text-slate-300">${m.message}</p>
                        </div>
                    `).join('') : '<p class="p-4 text-slate-500 dark:text-slate-400">No new communications from school.</p>'}
                </div>
            </div>

            <div>
                <h3 class="text-2xl font-bold mb-5 flex items-center space-x-2 text-slate-800 dark:text-white">${getIcon('TrendingUp')}<span>Summary Snapshot</span></h3>
                <div class="bg-white rounded-2xl shadow-custom p-6 border border-slate-200 dark:bg-slate-700 dark:border-slate-600">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="p-5 bg-indigo-50 rounded-xl flex items-center space-x-4 shadow-md border border-indigo-200 dark:bg-indigo-800 dark:border-indigo-700">
                            <div class="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-200 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-200">
                                ${getIcon('School')}
                            </div>
                            <div>
                                <p class="text-sm text-slate-600 font-medium dark:text-slate-300">Current Grade</p>
                                <p class="text-3xl font-extrabold text-indigo-800 dark:text-white">${student.grade}</p>
                            </div>
                        </div>
                        <div class="p-5 bg-teal-50 rounded-xl flex items-center space-x-4 shadow-md border border-teal-200 dark:bg-teal-800 dark:border-teal-700">
                            <div class="w-14 h-14 flex items-center justify-center rounded-xl bg-teal-200 text-teal-700 dark:bg-teal-700 dark:text-teal-200">
                                ${getIcon('ClipboardList')}
                            </div>
                            <div>
                                <p class="text-sm text-slate-600 font-medium dark:text-slate-300">Total Attendance</p>
                                <p class="text-3xl font-extrabold text-teal-800 dark:text-white">${totalAttendancePct}%</p>
                            </div>
                        </div>
                        <div class="p-5 bg-red-50 rounded-xl flex items-center space-x-4 shadow-md border border-red-200 dark:bg-red-800 dark:border-red-700">
                            <div class="w-14 h-14 flex items-center justify-center rounded-xl bg-red-200 text-red-700 dark:bg-red-700 dark:text-red-200">
                                ${getIcon('DollarSign')}
                            </div>
                            <div>
                                <p class="text-sm text-slate-600 font-medium dark:text-slate-300">Fees Pending</p>
                                <p class="text-3xl font-extrabold text-red-800 dark:text-white">${feesPendingCount} / $${totalPendingFeeAmount}</p>
                            </div>
                        </div>
                        <div class="p-5 bg-yellow-50 rounded-xl flex items-center space-x-4 shadow-md border border-yellow-200 dark:bg-yellow-800 dark:border-yellow-700">
                            <div class="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-200 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-200">
                                ${getIcon('Bell')}
                            </div>
                            <div>
                                <p class="text-sm text-slate-600 font-medium dark:text-slate-300">Total Notices</p>
                                <p class="text-3xl font-extrabold text-yellow-800 dark:text-white">${noticeData.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            ${renderManagementTables(student, false)} 

            ${renderPerformanceAndAssignments(student, false)} 
            
            ${renderAssignmentSection(student, false, false)}
        </div>
    `;
}

function renderDashboard() {
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.remove();
    }

    if (currentView === 'list') {
        renderStudentList();
    } else if (currentView === 'details' && selectedStudent) {
        selectedStudent = studentData.find(s => s.id === selectedStudent.id);

        let detailsHtml;
        if (currentUserType === 'student') {
            detailsHtml = renderStudentDashboard(selectedStudent);
        } else if (currentUserType === 'teacher') {
            detailsHtml = renderTeacherDashboard(selectedStudent);
        } else { // Parent View
            detailsHtml = renderParentDashboard(selectedStudent);
        }

        dashboardContainer.innerHTML = detailsHtml;

        const backButtonHtml = `<button id="back-btn" class="bg-white text-indigo-600 py-2 px-4 rounded-full shadow-md hover:shadow-lg hover:bg-indigo-50 transition-colors flex items-center space-x-1 mb-6 border border-indigo-200 active:scale-95 dark:bg-slate-700 dark:text-indigo-400 dark:border-indigo-800 dark:hover:bg-slate-600">
            ${getIcon('ArrowLeft')}
            <span class="font-semibold">Back to List</span>
        </button>`;

        const backButton = document.createElement('div');
        backButton.innerHTML = backButtonHtml;
        dashboardContainer.parentNode.insertBefore(backButton.firstElementChild, dashboardContainer);

        document.getElementById('back-btn').addEventListener('click', () => {
            currentView = 'list';
            renderDashboard();
        });

        // Wires up ADD/UPDATE buttons based on the user role

        if (currentUserType === 'teacher') {
            // Data Entry (Marks, Fees, Attendance, Assignment)
            if (document.getElementById('add-mark-btn')) {
                document.getElementById('add-mark-btn').addEventListener('click', openMarkModal);
            }
            if (document.getElementById('add-fee-btn')) {
                document.getElementById('add-fee-btn').addEventListener('click', openFeeModal);
            }
            if (document.getElementById('add-att-btn')) {
                document.getElementById('add-att-btn').addEventListener('click', openAttModal);
            }
            if (document.getElementById('add-assignment-btn')) {
                document.getElementById('add-assignment-btn').addEventListener('click', openAssignmentModal);
            }
            
            // Communication (To Parent)
            const sendBtnTeacher = document.getElementById('message-send-teacher-btn');
            if (sendBtnTeacher) {
                 sendBtnTeacher.addEventListener('click', () => openMessageSendModal(false));
            }

            // Assignment Status Toggles (Delegation)
            document.querySelectorAll('.assignment-toggle-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const sId = parseInt(e.currentTarget.dataset.studentId);
                    const aId = parseInt(e.currentTarget.dataset.assignmentId);
                    toggleAssignmentStatus(sId, aId);
                });
            });
        }
        
        // Parent View: Communication (To Teacher)
        if (currentUserType === 'parent') {
            const sendBtnParent = document.getElementById('message-send-parent-btn');
            if (sendBtnParent) {
                sendBtnParent.addEventListener('click', () => openMessageSendModal(true));
            }
        }
    }
}

// Event Listeners (Unchanged)
userTypeSelect.addEventListener('change', (e) => {
    currentUserType = e.target.value;
    currentView = 'list';
    renderDashboard();
});

// Student Form Listeners
studentForm.addEventListener('submit', saveStudent);
modalCloseBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
        closeModal();
    }
});

// Mark Form Listeners
markForm.addEventListener('submit', saveMark);
markModalCloseBtn.addEventListener('click', closeMarkModal);
markModalBackdrop.addEventListener('click', (e) => {
    if (e.target === markModalBackdrop) {
        closeMarkModal();
    }
});

// Notice Form Listeners
noticeForm.addEventListener('submit', saveNotice);
noticeModalCloseBtn.addEventListener('click', closeNoticeModal);
noticeModalBackdrop.addEventListener('click', (e) => {
    if (e.target === noticeModalBackdrop) {
        closeNoticeModal();
    }
});

// Fee Form Listeners
feeForm.addEventListener('submit', saveFee);
feeModalCloseBtn.addEventListener('click', closeFeeModal);
feeModalBackdrop.addEventListener('click', (e) => {
    if (e.target === feeModalBackdrop) {
        closeFeeModal();
    }
});

// Attendance Form Listeners
attForm.addEventListener('submit', saveAttendance);
attModalCloseBtn.addEventListener('click', closeAttModal);
attModalBackdrop.addEventListener('click', (e) => {
    if (e.target === attModalBackdrop) {
        closeAttModal();
    }
});

// Assignment Form Listeners
assignmentForm.addEventListener('submit', saveAssignment);
assignmentModalCloseBtn.addEventListener('click', closeAssignmentModal);
assignmentModalBackdrop.addEventListener('click', (e) => {
    if (e.target === assignmentModalBackdrop) {
        closeAssignmentModal();
    }
});

// Message Send Form Listeners
messageSendForm.addEventListener('submit', sendMessage);
messageSendModalCloseBtn.addEventListener('click', closeMessageSendModal);
messageSendModalBackdrop.addEventListener('click', (e) => {
    if (e.target === messageSendModalBackdrop) {
        closeMessageSendModal();
    }
});

// Initial render
renderDashboard();