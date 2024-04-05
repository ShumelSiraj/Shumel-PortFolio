/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const learnMoreSection = document.getElementById('learnMoreSection');

    learnMoreBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        learnMoreSection.style.display = learnMoreSection.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const fullPortfolioToggle = document.getElementById('fullPortfolioToggle');
    const fullPortfolioContent = document.getElementById('fullPortfolioContent');

    fullPortfolioToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action if it's a link
        fullPortfolioContent.style.display = fullPortfolioContent.style.display === 'block' ? 'none' : 'block';
    });
});



// Smooth scrolling for navigation links
document.querySelectorAll('#nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.dropdown-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Assuming .dropdown-content is the next element after the parent of h3
            const content = this.parentNode.nextElementSibling;

            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('fullPortfolioToggle');
    var content = document.getElementById('fullPortfolioContent');

    toggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action if it's a link
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
document.querySelectorAll('.work-item .image.fit.thumb').forEach(item => {
    item.addEventListener('click', () => {
        console.log('Image clicked!');
    });
});
document.querySelectorAll('.dropdown-content').forEach(item => {
    item.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            content.classList.remove('active');
        } else {
            content.style.display = "block";
            content.classList.add('active');
        }
    });
});
function goToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block'; // Ensure the section is visible
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
function showMaterialManagementPopup() {
    var title = 'Material Management Analyst';
    var content = `
	<ul>
		<li>Utilize advanced data analysis to optimize asset allocation and management, enhancing operational efficiency.
		</li>
		<li>Collaborate with IT, procurement, and operations teams to integrate and streamline data processes, improving workflow and data accuracy.
		</li>
		<li>Identify and resolve data discrepancies, maintaining high data quality for strategic decision-making.
		</li>
		<li>Implement data validation protocols to ensure database integrity.
		</li>
		<li>Drive continuous improvement by updating practices in line with industry trends and technological advancements.

		</li>
		<li>Employ statistical analysis and predictive modeling to inform asset management strategies, reducing costs.


		</li>
		<li>Conduct training on data management best practices, fostering a data-driven culture.


		</li>
	</ul>
`;
    
    document.getElementById('experienceTitle').innerHTML = title;
    document.getElementById('experienceDetails').innerHTML = content;
    document.getElementById('experiencePopup').style.display = 'block';
}
function datascience() {
    var title = 'Data Science Consultant';
    var content = `
	<ul>
	<li>Developed a Random Forest model and applied machine learning techniques to estimate traffic volumes, achieving an 81% R-squared score, which validated the model's forecasting accuracy.</li>
	<li>Engineered data extraction pipelines with Python, using libraries like Yahoo Finance and Requests, to streamline data retrieval and integration for model training.
	</li>
	<li>Utilized data visualization to present complex analysis, facilitating stakeholder understanding and decision-making.
	</li>
	<li>Monitored and refined machine learning models, ensuring their accuracy and relevance in urban planning and policy development.
	</li>
	</ul>
`;
    document.getElementById('experienceTitle').innerHTML = title;
    document.getElementById('experienceDetails').innerHTML = content;
    document.getElementById('experiencePopup').style.display = 'block';
}
function technicalsupport() {
    var title = 'Technical Support Specialist';
    var content = `
	<ul>
<li>Enhanced data collection and entry workflows by introducing automated tools and processes, slashing data cleaning and validation time by 75% and boosting overall processing efficiency.
</li>
<li>Upheld exceptional data accuracy and integrity, underpinning sophisticated analyses and insightful reporting that facilitated informed decision-making university-wide.
</li>
<li>Crafted and upheld detailed documentation for data management protocols, aiding in consistent and high-quality data handling across teams.
</li>
<li>Served as a pivotal liaison, bridging technical and operational domains, aligning data processes with organizational objectives, and streamlining communication across departments.
</li>
<li>Delivered top-tier technical support, resolving data-related queries for staff and faculty, thus enhancing system functionality and user satisfaction.
</li>
<li>Spearheaded database system enhancements, making them more user-friendly and scalable, which, in turn, optimized data workflows and elevated data quality and accessibility.
	</li>
	</ul>`;
    document.getElementById('experienceTitle').innerHTML = title;
    document.getElementById('experienceDetails').innerHTML = content;
    document.getElementById('experiencePopup').style.display = 'block';
}
function administrative() {
    var title = ' Administrative Assistant';
    var content = `
	<ul>
	<li>Analyzed 15 years of alumni donation data, identifying trends that informed a targeted strategy, increasing revenue by 20%.
	</li>
	<li>Managed large datasets to support fundraising efforts, ensuring data accuracy and efficient record-keeping for alumni relations.
	</li>
	<li>Collaborated with teams to convert data insights into actionable fundraising campaigns, directly impacting engagement and contributions.
	</li>
	<li>Streamlined data management processes, enhancing data analysis, reporting efficiency, and informed strategic decisions.
	</li>
	</ul>
` ;
    
    document.getElementById('experienceTitle').innerHTML = title;
    document.getElementById('experienceDetails').innerHTML = content;
    document.getElementById('experiencePopup').style.display = 'block';
}
function intern() {
    var title = ' Finance Intern';
    var content = `
	<ul>
	<li>Processed financial transactions, including vendor and employee payments, aligning with financial operations and analysis.
	</li>
	<li>Reconciled monthly Input Tax Credit from the GST portal, supporting tax compliance and financial accuracy.
	</li>
	<li>Prepared GST return inputs and managed payroll activities, facilitating tax calculations and salary processing.
	</li>
	<li>Utilized Financial Management System for transaction processing and reporting, enhancing data accuracy and efficiency.
	</li>
	<li>Developed analytical tools in Excel, improving financial analysis and operational decision-making.
	</li>
	</ul>
`;
    document.getElementById('experienceTitle').innerHTML = title;
    document.getElementById('experienceDetails').innerHTML = content;
    document.getElementById('experiencePopup').style.display = 'block';
}

function closeExperiencePopup() {
    document.getElementById('experiencePopup').style.display = 'none';
}
document.getElementById('experiencePopup').addEventListener('click', function() {
    document.getElementById('experiencePopup').style.display = 'none';
});

document.querySelector('.popup-content').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent closing when clicking inside the popup
});


document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.work-item .image.fit.thumb');
    const popup = document.getElementById('projectPopup');
    const title = document.getElementById('projectTitle');
    const description = document.getElementById('projectDescription');

    projectItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor action

            const projectTitle = this.getAttribute('data-title');
            const projectDescription = this.getAttribute('data-description');

            title.textContent = projectTitle;
            description.textContent = projectDescription;

            popup.style.display = 'block'; // Show the popup
        });
    });

    window.closeProjectPopup = function() {
        popup.style.display = 'none';
    }
});

document.querySelectorAll('.work-item .image.fit.thumb').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();  // This will prevent the default anchor action

        // Your code to show the popup
        const projectId = this.getAttribute('data-project-id');
        // Logic to display the content for the clicked project
    });
});

function closeProjectPopup(){
    document.getElementById('projectPopup').style.display = 'none';
}
document.getElementById('projectPopup').addEventListener('click', function() {
    document.getElementById('projectPopup').style.display = 'none';
});

document.querySelector('.popup-content').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent closing when clicking inside the popup
});
// Select all dropdowns
var dropdowns = document.querySelectorAll('.dropdown-content');

// Function to close all dropdowns
function closeAllDropdowns(except) {
    dropdowns.forEach(function(dropdown) {
        if (dropdown !== except) {
            dropdown.style.display = 'none';
        }
    });
}

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop click from reaching the document
        let dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = 'block'; // Show the dropdown content
    });
});
document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.style.display = 'none'; // Hide the dropdown content
    });
});



