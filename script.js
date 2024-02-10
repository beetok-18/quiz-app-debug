// Declare questionsToDisplay at the global scope
let questionsToDisplay = [];

document.addEventListener('DOMContentLoaded', (event) => {
    const customizeCheckbox = document.getElementById('customTest');
    const customTestOptions = document.querySelector('.custom-test-options');
    const questionRange = document.getElementById('question-range');
    const questionValue = document.getElementById('question-value');
    const timeRange = document.getElementById('time-range');
    const timeValue = document.getElementById('time-value');
    const practiceButton = document.getElementById('practice-mode');
    const mainMenu = document.getElementById('main-menu');
    const quizContainer = document.querySelector('.quiz-container');

    questionRange.addEventListener('input', function() {
        questionValue.textContent = this.value;
    });

    timeRange.addEventListener('input', function() {
        const hours = Math.floor(this.value / 60);
        const minutes = this.value % 60;
        timeValue.textContent = `${hours}h ${minutes}m`;
    });

    customizeCheckbox.addEventListener('change', function() {
        customTestOptions.style.display = this.checked ? 'block' : 'none';
    });

    // Sample quiz bank (Replace with your actual quiz data)
    const quizBank = [
               {
            "chapter": "chapter0",
            "questions": [
                {
                    "question": "What is the principle of confidentiality in the CIA triad?",
                    "options": [
                        "Data should be accessible only to authorized users",
                        "Data should remain unchanged and unmodified",
                        "Authorized systems and services should be readily available",
                        "Data should be backed up on a regular basis"
                    ],
                    "answer": "Data should be accessible only to authorized users"
                },
                {
                    "question": "A security administrator is analyzing the corporate wireless network. The network only has two access points running on channels 1 and 11. While using airodump-ng, the administrator notices other access points are running with the same corporate SSID on all available channels and with the same BSSID of one of the legitimate access points. Which of the following attacks is happening on the corporate network?",
                    "options": [
                        "Man-in-the-middle",
                        "Evil twin",
                        "Jamming",
                        "Rogue access point",
                        "Disassociation"
                    ],
                    "answer": "Evil twin"
                },
                {
                    "question": "A network administrator is setting up wireless access points in all the conference rooms and wants to authenticate devices using PKI. Which of the following should the administrator configure?",
                    "options": [
                        "A captive portal",
                        "PSK",
                        "802.1X",
                        "WPS"
                    ],
                    "answer": "802.1X"
                },
                {
                    "question": "A user reports constant lag and performance issues with the wireless network when working at a local coffee shop. A security analyst walks the user through an installation of Wireshark and gets a five-minute pcap to analyze. The analyst observes the following output: [Packet Capture Output] Which of the following attacks does the analyst MOST likely see in this packet capture?",
                    "options": [
                        "Session replay",
                        "Evil twin",
                        "Bluejacking",
                        "ARP poisoning"
                    ],
                    "answer": "ARP poisoning"
                },
                {
                    "question": "A new company wants to avoid channel interference when building a WLAN. The company needs to know the radio frequency behavior, identify dead zones, and determine the best place for access points. Which of the following should be done FIRST?",
                    "options": [
                        "Configure heat maps.",
                        "Utilize captive portals.",
                        "Conduct a site survey.",
                        "Install Wi-Fi analyzers."
                    ],
                    "answer": "Conduct a site survey."
                },
                {
                    "question": "A network engineer needs to create a plan for upgrading the wireless infrastructure in a large office. Priority must be given to areas that are currently experiencing latency and connection issues. Which of the following would be the BEST resource for determining the order of priority?",
                    "options": [
                        "Nmap",
                        "Heat maps",
                        "Network diagrams",
                        "Wireshark"
                    ],
                    "answer": "Heat maps"
                },
                {
                    "question": "The facilities supervisor for a government agency is concerned about unauthorized access to environmental systems in the event that the staff WiFi network is breached. Which of the following would BEST address this security concern?",
                    "options": [
                        "Install a smart meter on the staff WiFi.",
                        "Place the environmental systems in the same DHCP scope as the staff WiFi.",
                        "Implement Zigbee on the staff WiFi access points.",
                        "Segment the staff WiFi network from the environmental systems network."
                    ],
                    "answer": "Segment the staff WiFi network from the environmental systems network."
                },
                {
                    "question": "A company uses wireless for all laptops and keeps a very detailed record of its assets, along with a comprehensive list of devices that are authorized to be on the wireless network. The Chief Information Officer (CIO) is concerned about a script kiddie potentially using an unauthorized device to brute force the wireless PSK and obtain access to the internal network. Which of the following should the company implement to BEST prevent this from occurring?",
                    "options": [
                        "A BPDU guard",
                        "WPA-EAP",
                        "IP filtering",
                        "A WIDS"
                    ],
                    "answer": "WPA-EAP"
                },
                {
                    "question": "A small business office is setting up a wireless infrastructure with primary requirements centered around protecting customer information and preventing unauthorized access to the business network. Which of the following would BEST support the office's business needs? (Select TWO)",
                    "options": [
                        "Installing WAPs with strategic placement",
                        "Configuring access using WPA3",
                        "Installing a WIDS",
                        "Enabling MAC filtering",
                        "Changing the WiFi password every 30 days",
                        "Reducing WiFi transmit power throughout the office"
                    ],
                    "answer": [
                        "Configuring access using WPA3",
                        "Installing a WIDS"
                    ]
                },
                {
                    "question": "Which of the following would be the BEST method for creating a detailed diagram of wireless access points and hot-spots?",
                    "options": [
                        "Footprinting",
                        "White-box testing",
                        "A drone/UAV",
                        "Pivoting"
                    ],
                    "answer": "A drone/UAV"
                },
 // ... more questions
            ]
                },
                {
            "chapter": "chapter1",
            "questions": [
                {
                    "question": "A company has discovered unauthorized devices are using its WiFi network, and it wants to harden the access point to improve security. Which of the following configurations should an analyst enable to improve security? (Select Two)",
                    "options": [
                        "RADIUS",
                        "PEAP",
                        "WPS",
                        "WEP-TKIP",
                        "SSL",
                        "WPA2-PSK"
                    ],
                    "answer": [
                        "RADIUS",
                        "WPA2-PSK"
                    ]
                },
                {
                    "question": "A cybersecurity administrator needs to implement a Layer 7 security control on a network and block potential attacks. Which of the following can block an attack at Layer 7? (Select TWO).",
                    "options": [
                        "HIDS",
                        "NIPS",
                        "HSM",
                        "WAF",
                        "NAC",
                        "NIDS"
                    ],
                    "answer": [
                        "WAF",
                        "NIDS"
                    ]
                },
                {
                    "question": "A local coffee shop runs a small WiFi hot-spot for its customers that utilizes WPA2-PSK. The coffee shop would like to stay current with security trends and wants to implement WPA3 to make its WiFi even more secure. Which of the following technologies will the coffee shop MOST likely use in place of PSK?",
                    "options": [
                        "WEP",
                        "MSCHAP",
                        "WPS",
                        "SAE"
                    ],
                    "answer": "SAE"
                },
                {
                    "question": "During a routine scan of a wireless segment at a retail company, a security administrator discovers several devices are connected to the network that do not match the company's naming convention and are not in the asset inventory. WiFi access is protected with 256-bit encryption via WPA2. Physical access to the company's facility requires two-factor authentication using a badge and a passcode. Which of the following should the administrator implement to find and remediate the issue? (Select TWO)",
                    "options": [
                        "Check the SIEM for failed logins to the LDAP directory.",
                        "Enable MAC filtering on the switches that support the wireless network.",
                        "Run a vulnerability scan on all the devices in the wireless network",
                        "Deploy multi-factor authentication for access to the wireless network",
                        "Scan the wireless network for rogue access points.",
                        "Deploy a honeypot on the network"
                    ],
                    "answer": [
                        "Enable MAC filtering on the switches that support the wireless network.",
                        "Scan the wireless network for rogue access points."
                    ]
                },
                {
                    "question": "A security engineer is deploying a new wireless for a company. The company shares office space with multiple tenants. Which of the following should the engineer configure on the wireless network to ensure that confidential data is not exposed to unauthorized users?",
                    "options": [
                        "EAP",
                        "TLS",
                        "HTTPS",
                        "AES"
                    ],
                    "answer": "AES"
                },
                {
                    "question": "A backdoor was detected on the containerized application environment. The investigation detected that a zero-day vulnerability was introduced when the latest container image version was downloaded from a public registry. Which of the following is the BEST solution to prevent this type of incident from occurring again?",
                    "options": [
                        "Enforce the use of a controlled trusted source of container images",
                        "Deploy an IPS solution capable of detecting signatures of attacks targeting containers",
                        "Define a vulnerability scan to assess container images before being introduced to the environment",
                        "Create a dedicated VPC for the containerized environment"
                    ],
                    "answer": "Enforce the use of a controlled trusted source of container images"
                },
                {
                    "question": "A network engineer has been asked to investigate why several wireless barcode scanners and wireless computers in a warehouse have intermittent connectivity to the shipping server. The barcode scanners and computers are all on forklift trucks and move around the warehouse during their regular use. Which of the following should the engineer do to determine the issue? (Choose two)",
                    "options": [
                        "Perform a site survey",
                        "Deploy an FTK Imager",
                        "Create a heat map",
                        "Scan for rogue access points",
                        "Upgrade the security protocols",
                        "Install a captive portal"
                    ],
                    "answer": [
                        "Perform a site survey",
                        "Create a heat map"
                    ]
                },
                {
                    "question": "A network analyst is setting up a wireless access point for a home office in a remote, rural location. The requirement is that users need to connect to the access point securely but do not want to have to remember passwords. Which of the following should the network analyst enable to meet the requirement?",
                    "options": [
                        "MAC address filtering",
                        "802.1X",
                        "Captive portal",
                        "WPS"
                    ],
                    "answer": "WPS"
                },
                {
                    "question": "A network engineer is troubleshooting wireless network connectivity issues that were reported by users. The issues are occurring only in the section of the building that is closest to the parking lot. Users are intermittently experiencing slow speeds when accessing websites and are unable to connect to network drives. The issues appear to increase when laptop users return to desks after using their devices in other areas of the building. There have also been reports of users being required to enter their credentials on web pages in order to gain access to them. Which of the following is the MOST likely cause of this issue?",
                    "options": [
                        "An external access point is engaging in an evil-twin attack.",
                        "The signal on the WAP needs to be increased in that section of the building.",
                        "The certificates have expired on the devices and need to be reinstalled.",
                        "The users in that section of the building are on a VLAN that is being blocked by the firewall."
                    ],
                    "answer": "An external access point is engaging in an evil-twin attack."
                },
                {
                    "question": "A user contacts the help desk to report the following: • Two days ago, a pop-up browser window prompted the user for a name and password after connecting to the corporate wireless SSID. This had never happened before, but the user entered the information as requested. • The user was able to access the Internet but had trouble accessing the department share until the next day. • The user is now getting notifications from the bank about unauthorized transactions. Which of the following attack vectors was MOST likely used in this scenario?",
                    "options": [
                        "Rogue access point",
                        "Evil twin",
                        "DNS poisoning",
                        "ARP poisoning"
                    ],
                    "answer": "Evil twin"
                },
                {
                    "question": "A cybersecurity administrator needs to allow mobile BYOD devices to access network resources. As the devices are not enrolled in the domain and do not have policies applied to them, which of the following are the best practices for authentication and infrastructure security? (Select TWO).",
                    "options": [
                        "Create a new network for the mobile devices and block communication to the internal network and servers",
                        "Use a captive portal for user authentication.",
                        "Authenticate users using OAuth for more resiliency",
                        "Implement SSO and allow communication to the internal network",
                        "Use the existing network and allow communication to the internal network and servers.",
                        "Use a new and updated RADIUS server to maintain the best solution"
                    ],
                    "answer": [
                        "Use a captive portal for user authentication.",
                        "Use a new and updated RADIUS server to maintain the best solution"
                    ]
                },
                // ... more questions
            ]
                    },
                    {
            "chapter": "chapter2",
                        "questions": [
                            {
                    "question": "Which of the following is a security implication of newer ICS devices that are becoming more common in corporations?",
                    "options": [
                        "Devices with cellular communication capabilities bypass traditional network security controls.",
                        "Many devices do not support elliptic-curve encryption algorithms due to the overhead they require.",
                        "These devices often lack privacy controls and do not meet newer compliance regulations.",
                        "Unauthorized voice and audio recording can cause loss of intellectual property."
                    ],
                    "answer": "Devices with cellular communication capabilities bypass traditional network security controls."
                },
                {
                    "question": "A company uses wireless for all laptops and keeps a very detailed record of its assets, along with a comprehensive list of devices that are authorized to be on the wireless network. The Chief Information Officer (CIO) is concerned about a script kiddie potentially using an unauthorized device to brute force the wireless PSK and obtain access to the internal network. Which of the following should the company implement to BEST prevent this from occurring?",
                    "options": [
                        "A BPDU guard",
                        "WPA-EAP",
                        "IP filtering",
                        "A WIDS"
                    ],
                    "answer": "WPA-EAP"
                },
                {
                    "question": "A company deployed a WiFi access point in a public area and wants to harden the configuration to make it more secure. After performing an assessment, an analyst identifies that the access point is configured to use WPA3, AES, WPS, and RADIUS. Which of the following should the analyst disable to enhance the access point security?",
                    "options": [
                        "WPA3",
                        "AES",
                        "RADIUS",
                        "WPS"
                    ],
                    "answer": "WPS"
                },
                {
                    "question": "A network administrator at a large organization is reviewing methods to improve the security of the wired LAN. Any security improvement must be centrally managed and allow corporate-owned devices to have access to the intranet but limit others to Internet access only. Which of the following should the administrator recommend?",
                    "options": [
                        "802.1X utilizing the current PKI infrastructure",
                        "SSO to authenticate corporate users",
                        "MAC address filtering with ACLs on the router",
                        "PAM for user account management"
                    ],
                    "answer": "802.1X utilizing the current PKI infrastructure"
                },
                {
                    "question": "A network engineer needs to build a solution that will allow guests at the company's headquarters to access the Internet via WiFi. This solution should not allow access to the internal corporate network, but it should require guests to sign off on the acceptable use policy before accessing the Internet. Which of the following should the engineer employ to meet these requirements?",
                    "options": [
                        "Implement open PSK on the APs",
                        "Deploy a WAF",
                        "Configure WIPS on the APs",
                        "Install a captive portal"
                    ],
                    "answer": "Install a captive portal"
                },
                {
                    "question": "A network technician is installing a guest wireless network at a coffee shop. When a customer purchases an item, the password for the wireless network is printed on the receipt so the customer can log in. Which of the following will the technician MOST likely configure to provide the highest level of security with the least amount of overhead?",
                    "options": [
                        "WPA-EAP",
                        "WEP-TKIP",
                        "WPA-PSK",
                        "WPS-PIN"
                    ],
                    "answer": "WPA-PSK"
                },
                {
                    "question": "A user's laptop constantly disconnects from the Wi-Fi network. Once the laptop reconnects, the user can reach the internet but cannot access shared folders or other network resources. Which of the following types of attacks is the user MOST likely experiencing?",
                    "options": [
                        "Bluejacking",
                        "Jamming",
                        "Rogue access point",
                        "Evil twin"
                    ],
                    "answer": "Evil twin"
                },
                {
                    "question": "A security analyst reports a company policy violation in a case in which a large amount of sensitive data is being downloaded after hours from various mobile devices to an external site. Upon further investigation, the analyst notices that successful login attempts are being conducted with impossible travel times during the same time periods when the unauthorized downloads are occurring. The analyst also discovers a couple of WAPs are using the same SSID, but they have non-standard DHCP configurations and an overlapping channel. Which of the following attacks is being conducted?",
                    "options": [
                        "Evil twin",
                        "Jamming",
                        "DNS poisoning",
                        "Bluesnarfing",
                        "DDoS"
                    ],
                    "answer": "Evil twin"
                },
                {
                    "question": "The Chief Technology Officer of a local college would like visitors to utilize the school's WiFi but must be able to associate potential malicious activity with a specific person. Which of the following would BEST allow this objective to be met?",
                    "options": [
                        "Requiring all new, on-site visitors to configure their devices to use WPS",
                        "Implementing a new SSID for every event hosted by the college that has visitors",
                        "Creating a unique PSK for every visitor when they arrive at the reception area",
                        "Deploying a captive portal to capture visitors' MAC addresses and names"
                    ],
                    "answer": "Deploying a captive portal to capture visitors' MAC addresses and names"
                },
                {
                    "question": "A company is planning to install a guest wireless network so visitors will be able to access the Internet. The stakeholders want the network to be easy to connect to, so time is not wasted during meetings. The WAPs are configured so that power levels and antennas cover only the conference rooms where visitors will attend meetings. Which of the following would BEST protect the company's Internal wireless network against visitors accessing company resources?",
                    "options": [
                        "Configure the guest wireless network to be on a separate VLAN from the company's internal wireless network",
                        "Change the password for the guest wireless network every month.",
                        "Decrease the power levels of the access points for the guest wireless network.",
                        "Enable WPA2 using 802.1X for logging on to the guest wireless network."
                    ],
                    "answer": "Configure the guest wireless network to be on a separate VLAN from the company's internal wireless network"
                },
                            // ... more questions
                        ]
                    },
                    {
            "chapter": "chapter3",
                        "questions": [
                            {
                            },
                            // ... more questions
                        ]
                    },
                    {
            "chapter": "chapter4",
                        "questions": [
                            {
                            },
                            // ... more questions
                        ]
                    },
                    {
            "chapter": "chapter5",
                        "questions": [
                            {
                            },
                            // ... more questions
                        ]
                    },

        
        // ... more chapters 
    ];

    practiceButton.addEventListener('click', function() {
        const selectedChapters = getSelectedChapters();
        const totalQuestions = parseInt(questionRange.value, 10);
        startQuiz(selectedChapters, totalQuestions);
    });

    function getSelectedChapters() {
        const selectedChapters = [];
        document.querySelectorAll('.chapter-option:checked').forEach((checkbox) => {
            selectedChapters.push(checkbox.id);
        });
        return selectedChapters;
    }

    function startQuiz(selectedChapters, totalQuestions) {
        mainMenu.style.display = 'none';
        quizContainer.style.display = 'block';
        loadQuestions(selectedChapters, totalQuestions);
    }

    function loadQuestions(selectedChapters, totalQuestions) {
        console.log("loadQuestions started")
        // Reset questionsToDisplay before loading new questions
        questionsToDisplay = []; 

        selectedChapters.forEach(chapterId => {
            const chapter = quizBank.find(ch => ch.chapter === chapterId);
            if (chapter) {
                questionsToDisplay = questionsToDisplay.concat(chapter.questions);
            }
            console.log("Final questionsToDisplay: ", questionsToDisplay);  // Log the entire array
            console.log("Length of questionsToDisplay: ", questionsToDisplay.length);   //Log the length only
        });

        // Here you may shuffle and limit the questionsToDisplay array as needed
        displayQuestion(0); // Start with the first question
    }

    let currentQuestionIndex = 0;

    function displayQuestion(index) {
        // Make sure index is within the bounds of the questionsToDisplay array
        if (index < 0 || index >= questionsToDisplay.length) {
            console.error("Question index is out of bounds.");
            return;
        }

        const questionObj = questionsToDisplay[index];
        const questionContainer = document.querySelector('.question-container');
        const questionText = document.querySelector('.question-text');
        const answerList = document.querySelector('.answer-list');

        // Update the question text
        questionText.textContent = questionObj.question;

        // Clear existing answers before adding new ones
        answerList.innerHTML = '';

        // Create answer options dynamically
        questionObj.options.forEach((option, idx) => {
            const optionElement = document.createElement('li');
            const radioButton = `<input type="radio" name="answer" id="option${idx}" value="${option}">
                                <label for="option${idx}">${option}</label>`;
            optionElement.innerHTML = radioButton;
            answerList.appendChild(optionElement);
        });
    }

    function nextQuestion() {
        if (currentQuestionIndex < questionsToDisplay.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        } else {
            alert('End of the quiz!');
        }
    }

    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex);
        }
    }

    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('previous-question').addEventListener('click', prevQuestion);
});
