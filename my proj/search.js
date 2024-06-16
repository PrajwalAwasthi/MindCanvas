const keywords = ["General Knowledge", "Quantitative Aptitude", "General Science", "Indian History", "Indian Polity", "Indian Geography", "Indian Economy", "English", "SSC Exam Preparation", "Railways(RRB) Exam Preparation", "UPSC/IAS Exam Preparation", "Banking Exam Preparation", "CTET/STET Exam Preparation", "CSAT Exam Preparation", "JEE Advanced & Mains Exam Preparation", "Defence Related Exam", "Other Important Exam Preparation"];

const searchInput = document.getElementById("searchInput");
const searchDropdown = document.getElementById("searchDropdown");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  redirectToSelectedPage();
});

// Event listener for search input
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.trim().toLowerCase(); // Convert input to lowercase
  const matchingKeywords = keywords.filter((keyword) =>
    keyword.toLowerCase().includes(searchTerm) // Convert keyword to lowercase for comparison
  );

  // Clear previous dropdown options
  searchDropdown.innerHTML = "";

  // Display matching keywords in dropdown
  if (searchTerm.length > 0 && matchingKeywords.length > 0) {
    matchingKeywords.forEach((keyword) => {
      const option = document.createElement("div");
      option.textContent = keyword;
      option.addEventListener("click", function () {
        searchInput.value = keyword;
        searchDropdown.style.display = "none";
      });
      searchDropdown.appendChild(option);
    });
    searchDropdown.style.display = "block"; // Show dropdown
  } else {
    searchDropdown.style.display = "none"; // Hide dropdown if no matches
  }
});

// Mapping between keywords and section IDs within the page
const keywordToSectionId = {
  "General Knowledge": "a1",
  "Quantitative Aptitude":"a2",
  "General Science":"a3",
  "Indian History":"a4",
  "Indian Polity":"a5",
  "Indian Geography":"a6",
  "Indian Economy":"a7",
  "English":"a8",
  "SSC Exam Preparation":"a9",
  "Railways(RRB) Exam Preparation":"a10",
  "UPSC/IAS Exam Preparation":"a11",
  "Banking Exam Preparation":"a12",
  "CTET/STET Exam Preparation":"a13",
  "CSAT Exam Preparation":"a14",
  "JEE Advanced & Mains Exam Preparation":"a15",
  "Defence Related Exam":"a16",
  "Other Important Exam Preparation":"a17",
};

// Redirect to selected page and scroll to specific section
function redirectToSelectedPage() {
  const selectedKeyword = searchInput.value.trim(); // No need to convert to lowercase here
  console.log("chal ra hai");
  console.log(selectedKeyword);
  const lowerCaseKeywords = keywords.map(keyword => keyword.toLowerCase()); // Convert keywords to lowercase

  if (lowerCaseKeywords.includes(selectedKeyword.toLowerCase())) { // Check lowercase keywords
    const pageUrl = "Books.html"; // Get the page URL
    const sectionId = keywordToSectionId[keywords[lowerCaseKeywords.indexOf(selectedKeyword.toLowerCase())]]; // Get the section ID corresponding to the selected keyword from original array
    if (pageUrl && sectionId) {
      // Redirect to the corresponding page with fragment identifier (section ID)
      window.location.href = pageUrl + "#" + sectionId;
    } else {
      console.error(
        `No page URL or section ID found for keyword ${selectedKeyword}`
      );
    }
  } else {
    alert("Please select a valid keyword from the dropdown.");
  }
}

 // Function to scroll to the top of the page
 function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the button when user scrolls down
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('goTopBtn').style.display = 'block';
    } else {
        document.getElementById('goTopBtn').style.display = 'none';
    }
}

