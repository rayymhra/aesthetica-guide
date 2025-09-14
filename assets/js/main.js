// Sample aesthetic data (would normally be loaded from JSON files)
        const aestheticsData = [
            {
                id: 1,
                title: "Cottagecore",
                description: "A nostalgic interpretation of western agricultural life centered around ideas of simple living and harmony with nature.",
                image: "https://images.unsplash.com/photo-1593941707882-a5bba53377fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                tags: ["nature", "vintage", "romantic", "rural"],
                category: "lifestyle"
            },
            {
                id: 2,
                title: "Dark Academia",
                description: "Aesthetic centered around higher education, writing, and the arts with a moody, classical tone.",
                image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                tags: ["academic", "moody", "classical", "literature"],
                category: "academic"
            },
            {
                id: 3,
                title: "Minimalist",
                description: "Characterized by extreme spareness and simplicity, valuing the idea of 'less is more'.",
                image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                tags: ["simple", "clean", "modern", "neutral"],
                category: "design"
            },
            {
                id: 4,
                title: "Cyberpunk",
                description: "Blending futuristic technology with broken down society, often with a neon-noir visual style.",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                tags: ["futuristic", "tech", "neon", "dystopian"],
                category: "futuristic"
            },
            {
                id: 5,
                title: "Coastal Grandmother",
                description: "Inspired by relaxed, elegant seaside living with a palette of neutrals, blues, and whites.",
                image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                tags: ["coastal", "relaxed", "elegant", "neutral"],
                category: "lifestyle"
            },
            {
                id: 6,
                title: "Art Deco",
                description: "Bold geometric patterns, rich colors, and lavish ornamentation that represented luxury and glamour.",
                image: "https://images.unsplash.com/photo-1519710164239-da123c03c933?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                tags: ["vintage", "luxury", "geometric", "glamorous"],
                category: "vintage"
            }
        ];

        // Function to render aesthetic cards
        function renderAesthetics(aesthetics) {
            const grid = document.getElementById('aestheticsGrid');
            grid.innerHTML = '';
            
            aesthetics.forEach(aesthetic => {
                const card = document.createElement('div');
                card.className = 'aesthetic-card';
                card.innerHTML = `
                    <div class="card-image">
                        <img src="${aesthetic.image}" alt="${aesthetic.title}">
                    </div>
                    <div class="card-content">
                        <h3>${aesthetic.title}</h3>
                        <p>${aesthetic.description}</p>
                        <div class="tags">
                            ${aesthetic.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Initial render
        renderAesthetics(aestheticsData);

        // Filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filter = button.textContent.toLowerCase();
                
                if (filter === 'all') {
                    renderAesthetics(aestheticsData);
                } else {
                    const filteredAesthetics = aestheticsData.filter(aesthetic => 
                        aesthetic.tags.includes(filter) || aesthetic.category === filter
                    );
                    renderAesthetics(filteredAesthetics);
                }
            });
        });

        // Search functionality
        const searchInput = document.querySelector('.search-input');
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            if (searchTerm === '') {
                renderAesthetics(aestheticsData);
                return;
            }
            
            const filteredAesthetics = aestheticsData.filter(aesthetic => 
                aesthetic.title.toLowerCase().includes(searchTerm) ||
                aesthetic.description.toLowerCase().includes(searchTerm) ||
                aesthetic.tags.some(tag => tag.includes(searchTerm))
            );
            
            renderAesthetics(filteredAesthetics);
        });

        // Form submission
        const suggestionForm = document.getElementById('suggestionForm');
        suggestionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for your suggestion! We\'ll review it and consider adding it to our collection.');
            suggestionForm.reset();
        });