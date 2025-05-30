stocks.forEach(stock => {
                    const change = (Math.random() * stock.volatility * 2 - stock.volatility).toFixed(2);
                    const newPrice = (parseFloat(stock.currentPrice) + parseFloat(change)).toFixed(2);
                    const priceElement = document.querySelector(`.stock-name:contains("${stock.name}")`).parentElement.nextElementSibling;
                    
                    priceElement.textContent = $${newPrice};
                    
                    // Update return percentage
                    const returnElement = priceElement.parentElement.nextElementSibling.nextElementSibling.lastElementChild;
                    const currentReturn = parseFloat(returnElement.textContent.replace(/[^0-9.-]/g, ''));
                    const newReturn = (currentReturn + (Math.random() * 0.2 - 0.1)).toFixed(2);
                    
                    // Update color based on return
                    returnElement.textContent = ~${newReturn} %;
                    returnElement.className = 'stock-detail-value ' + 
                        (newReturn > 0 ? 'positive-return' : newReturn < 0 ? 'negative-return' : 'neutral-return');
                });
                
                setTimeout(updateStockPrices, 5000); // Update every 5 seconds
            }
            
            // Custom contains selector for older browsers
            if (!Element.prototype.matches) {
                Element.prototype.matches = 
                    Element.prototype.msMatchesSelector || 
                    Element.prototype.webkitMatchesSelector;
            }
            
            if (!Element.prototype.closest) {
                Element.prototype.closest = function(s) {
                    var el = this;
                    do {
                        if (el.matches(s)) return el;
                        el = el.parentElement || el.parentNode;
                    } while (el !== null && el.nodeType === 1);
                    return null;
                };
            }
            
            // Start updating stock prices
            updateStockPrices();
        });

        
        document.addEventListener('DOMContentLoaded', function() {
            // Add click event to nav items
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    navItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Simulate live stock data updates
            function updateStockPrices() {
                const stocks = [
                    { name: 'Apple', currentPrice: 150.70, volatility: 1.5 },
                    { name: 'Meta', currentPrice: 39.40, volatility: 2.2 },
                    { name: 'Microsoft', currentPrice: 140.94, volatility: 1.8 },
                    { name: 'Google', currentPrice: 92.12, volatility: 1.2 }
                ];