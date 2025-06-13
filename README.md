# 🗺️ Google Maps Lead Scraper

#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

A **production-grade, scalable lead generation system** that extracts business data from Google Maps search results using **Crawl4AI** - completely open-source with zero paid APIs.

## 🌟 Features

- **🚀 High Performance**: Scrape 1000+ leads in 3-5 minutes
- **🔄 Anti-Bot Protection**: Advanced stealth techniques, proxy rotation, human-like behavior
- **📊 Structured Data**: Extract business name, website, email, phone, social media handles
- **⚡ Concurrent Processing**: Parallel crawling with intelligent resource management
- **🌐 Proxy Support**: Built-in proxy rotation for large-scale scraping
- **📁 Multiple Formats**: CSV output, extensible to JSON, Google Sheets
- **🛡️ Error Handling**: Robust retry logic and failure recovery
- **🔧 Configurable**: Extensive customization options
- **🐳 Docker Ready**: Containerized deployment support

## 📋 Requirements

- Python 3.8+
- Crawl4AI 0.6.0+
- Playwright (installed automatically)
- 4GB+ RAM (for large-scale scraping)
- Internet connection

## 🚀 Quick Start

### 1. Installation

```bash
# Clone or create the project
mkdir gmaps-scraper && cd gmaps-scraper

# Install dependencies
pip install crawl4ai playwright asyncio

# Setup Playwright browsers
playwright install chromium
```

### 2. Basic Usage

```bash
# Simple scraping
python gmaps_scraper.py "restaurants in New York" --max-results 100

# With custom output file
python gmaps_scraper.py "dental clinics in Miami" --max-results 200 --output dental_leads.csv

# Advanced options
python gmaps_scraper.py "auto repair shops in Los Angeles" \
    --max-results 500 \
    --concurrent-workers 25 \
    --proxy-file proxies.txt \
    --debug
```

### 3. Expected Output

The scraper generates a CSV file with the following columns:

| Column | Description | Example |
|--------|-------------|---------|
| business_name | Business name | "Joe's Pizza" |
| first_name | Contact first name | "John" |
| last_name | Contact last name | "Doe" |
| email | Business email | "contact@joespizza.com" |
| website | Business website | "https://joespizza.com" |
| phone | Phone number | "(555) 123-4567" |
| address | Business address | "123 Main St, New York, NY" |
| facebook | Facebook profile | "https://facebook.com/joespizza" |
| instagram | Instagram profile | "https://instagram.com/joespizza" |
| twitter | Twitter profile | "https://twitter.com/joespizza" |
| linkedin | LinkedIn profile | "https://linkedin.com/company/joespizza" |
| google_maps_url | Original Google Maps URL | "https://maps.google.com/..." |
| rating | Google rating | "4.5" |
| review_count | Number of reviews | "150" |

## 📖 Detailed Usage

### Command Line Options

```bash
python gmaps_scraper.py [QUERY] [OPTIONS]

Positional Arguments:
  query                 Search query (e.g., "restaurants in New York")

Optional Arguments:
  --max-results         Maximum number of results (default: 100)
  --output              Output CSV file (default: leads.csv)
  --concurrent-workers  Number of concurrent workers (default: 20)
  --proxy-file          File containing proxy list (one per line)
  --headless            Run in headless mode (default: True)
  --debug               Enable debug logging
```

### Proxy Configuration

Create a `proxies.txt` file with one proxy per line:

```
proxy1.example.com:8080
user:pass@proxy2.example.com:8080
http://proxy3.example.com:3128
socks5://proxy4.example.com:1080
```

### Programmatic Usage

```python
import asyncio
from gmaps_scraper import GoogleMapsLeadScraper, ScrapingConfig

async def scrape_leads():
    config = ScrapingConfig(
        search_query="coffee shops in Seattle",
        max_results=500,
        output_file="coffee_leads.csv",
        concurrent_workers=30,
        proxy_list=["proxy1.com:8080", "proxy2.com:8080"],
        use_stealth=True,
        headless=True
    )
    
    scraper = GoogleMapsLeadScraper(config)
    leads = await scraper.scrape_leads()
    scraper.save_to_csv(leads)
    
    return leads

# Run the scraper
leads = asyncio.run(scrape_leads())
print(f"Scraped {len(leads)} leads")
```

## 🏗️ Architecture

### System Components

```mermaid
graph TD
    A[Input Query] --> B[Google Maps Search]
    B --> C[Pagination Handler]
    C --> D[Business URL Extraction]
    D --> E[Parallel Detail Scraping]
    E --> F[Contact Info Enhancement]
    F --> G[Data Validation]
    G --> H[CSV Export]
    
    I[Proxy Manager] --> E
    J[Anti-Bot System] --> E
    K[Rate Limiter] --> E
```

### Scraping Process

1. **Search Results Loading**: Load Google Maps search page and handle pagination
2. **URL Extraction**: Extract individual business page URLs from search results
3. **Parallel Detail Scraping**: Scrape business details using concurrent workers
4. **Contact Enhancement**: Visit business websites to find emails and social profiles
5. **Data Processing**: Clean and validate extracted data
6. **Export**: Save structured data to CSV

### Anti-Bot Measures

- **Stealth Mode**: Advanced browser fingerprint masking
- **Proxy Rotation**: Automatic IP rotation for large-scale scraping
- **Human-like Behavior**: Random delays, realistic mouse movements
- **Session Management**: Intelligent browser session reuse
- **User Agent Rotation**: Dynamic user agent switching
- **CAPTCHA Handling**: Automatic detection and bypass strategies

## ⚡ Performance Optimization

### Scaling Configuration

For **high-volume scraping** (1000+ leads):

```python
config = ScrapingConfig(
    search_query="your query",
    max_results=2000,
    concurrent_workers=50,  # Increase for more parallel processing
    page_timeout=20000,     # Reduce timeout for faster failures
    delay_range=(0.5, 1.5), # Reduce delays for speed
    use_stealth=True,       # Keep stealth enabled
    headless=True          # Always use headless for performance
)
```

### Hardware Recommendations

| Scale | RAM | CPU | Concurrent Workers |
|-------|-----|-----|-------------------|
| Small (100 leads) | 2GB | 2 cores | 10-15 |
| Medium (500 leads) | 4GB | 4 cores | 20-30 |
| Large (1000+ leads) | 8GB+ | 8+ cores | 40-60 |

### Performance Tips

1. **Use SSD storage** for faster browser operations
2. **Increase concurrent workers** based on your hardware
3. **Use proxy rotation** to avoid rate limiting
4. **Enable headless mode** for better performance
5. **Monitor memory usage** and adjust batch sizes

## 🐳 Docker Deployment

### Build and Run

```bash
# Build the container
docker build -t gmaps-scraper .

# Run a scraping job
docker run -v $(pwd)/output:/app/output gmaps-scraper \
    python gmaps_scraper.py "restaurants in Chicago" --max-results 200

# Run with proxy file
docker run -v $(pwd)/output:/app/output -v $(pwd)/proxies.txt:/app/proxies.txt \
    gmaps-scraper python gmaps_scraper.py "hotels in Las Vegas" \
    --max-results 300 --proxy-file /app/proxies.txt
```

### Docker Compose (Multi-Worker)

```bash
# Run multiple workers in parallel
docker-compose up --scale scraper-worker=3
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
# Browser settings
HEADLESS_MODE=true
STEALTH_MODE=true
BROWSER_TIMEOUT=30000

# Performance
MAX_CONCURRENT_WORKERS=20
REQUEST_DELAY_MIN=1.0
REQUEST_DELAY_MAX=3.0

# Proxy settings
PROXY_ROTATION_ENABLED=true
PROXY_LIST_FILE=proxies.txt

# Output
OUTPUT_DIRECTORY=./output
LOG_LEVEL=INFO
```

### Advanced Configuration

```python
# Custom browser configuration
browser_config = BrowserConfig(
    browser_type="chromium",
    headless=True,
    viewport_width=1920,
    viewport_height=1080,
    user_agent="custom-user-agent",
    proxy="http://proxy:8080",
    extra_args=["--no-sandbox", "--disable-dev-shm-usage"]
)

# Custom crawler configuration
crawler_config = CrawlerRunConfig(
    page_timeout=30000,
    wait_until="networkidle",
    simulate_user=True,
    magic=True,
    exclude_external_images=True
)
```

## 📊 Monitoring and Logging

### Log Levels

- **INFO**: General progress information
- **DEBUG**: Detailed debugging information
- **WARNING**: Non-fatal issues
- **ERROR**: Serious problems

### Log Files

- `scraper.log`: Main application log
- `crawler.log`: Crawl4AI specific logs (if debug enabled)

### Monitoring Metrics

The scraper provides real-time monitoring:

```
🚀 Starting lead scraping for query: 'restaurants in New York'
📊 Target: 1000 leads
🔍 Loading initial search results...
📄 Found 30 initial business URLs
🔄 Scrolling to load more results (attempt 1)
📄 Found 15 new URLs. Total: 45
⚡ Processing batch 1: 20 URLs
✅ Scraping completed successfully!
📊 Results: 987 leads scraped
⏱️  Time taken: 234.5 seconds
📁 Output file: leads.csv
```

## 🛠️ Troubleshooting

### Common Issues

**1. Browser Launch Failed**
```bash
# Install browser dependencies
playwright install-deps chromium
```

**2. No Results Found**
- Check if the search query is valid
- Verify Google Maps returns results for the query
- Enable debug mode to see detailed logs

**3. Rate Limiting/Blocking**
- Add proxy rotation with `--proxy-file`
- Reduce concurrent workers
- Increase delay ranges

**4. Memory Issues**
- Reduce `concurrent_workers`
- Process smaller batches
- Use headless mode

### Debug Mode

Enable detailed logging:

```bash
python gmaps_scraper.py "your query" --debug
```

This will show:
- Detailed browser operations
- Network requests
- Element selection processes
- Error stack traces

### Performance Issues

**Slow Scraping**:
- Increase `concurrent_workers`
- Use faster proxies
- Reduce `page_timeout`

**High Memory Usage**:
- Reduce batch sizes
- Enable headless mode
- Close browser sessions more frequently

## 📈 Scaling to Production

### Horizontal Scaling

Deploy multiple instances:

```bash
# Instance 1
python gmaps_scraper.py "restaurants in New York" --output nyc_1.csv

# Instance 2
python gmaps_scraper.py "restaurants in Chicago" --output chicago_1.csv

# Instance 3
python gmaps_scraper.py "restaurants in LA" --output la_1.csv
```

### Cloud Deployment

**AWS EC2**:
- Use c5.2xlarge or larger instances
- Configure security groups for web access
- Use Elastic IP for consistent scraping

**Google Cloud**:
- Use n1-standard-4 or larger instances
- Enable HTTP/HTTPS traffic

**Docker Swarm/Kubernetes**:
- Deploy as microservices
- Use horizontal pod autoscaling
- Configure resource limits

### Database Integration

Extend the scraper to save to databases:

```python
import sqlite3
import pandas as pd

def save_to_database(leads: List[LeadData], db_path: str):
    df = pd.DataFrame([asdict(lead) for lead in leads])
    
    conn = sqlite3.connect(db_path)
    df.to_sql('leads', conn, if_exists='append', index=False)
    conn.close()
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Legal Notice

This tool is for educational and research purposes. Users are responsible for:

- Complying with Google's Terms of Service
- Respecting robots.txt files
- Following data protection regulations (GDPR, CCPA)
- Using scraped data ethically and legally

## 🆘 Support

- **Issues**: Report bugs and request features on GitHub
- **Documentation**: Check the docs/ folder for detailed guides
- **Community**: Join discussions in GitHub Discussions

---

**Built with ❤️ using [Crawl4AI](https://github.com/unclecode/crawl4ai)**

# LeadGen Copilot - AI-Powered Lead Generation & Cold Outreach

A pixel-perfect clone of PiccoPilot.com featuring advanced lead generation and cold outreach automation tools.

## 🚀 Features

### Free Features
- **Google Maps Business Scraper**: Extract business names, categories, websites, and phone numbers from Google Maps
- **Basic Lead Export**: Download leads as CSV files

### Premium Features
1. **Auto Google Sheets Upload**: Automatically upload scraped leads to your Google Sheets
2. **Gmail Address Extractor**: Find email addresses for each lead using advanced web crawling
3. **AI-Powered Personalized Outreach**: Generate ultra-natural cold outreach messages by analyzing prospect websites
4. **LinkedIn Easy Apply Automation**: Automated job applications with anti-detection safeguards
5. **Automated Cold Email Sender**: Send personalized emails with domain deliverability protection

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, Lucide React
- **Backend**: Python (placeholder structure included)

## 📁 Project Structure

```
/
├── frontend/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   ├── lib/                 # Utility functions
│   └── public/              # Static assets
├── backend-placeholder/     # Python API stubs
└── public/assets/           # Images and icons
```

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Features

- Pixel-perfect clone of PiccoPilot.com design
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and micro-interactions
- Modern gradient backgrounds and glassmorphism effects
- Accessible design with WCAG AA compliance

## 🔧 Backend Integration

The `/backend-placeholder` folder contains Python API stubs where you can integrate:
- Google Maps scraping logic
- Email extraction algorithms
- AI-powered message generation
- LinkedIn automation
- Email sending services

## 📱 Pages

- **Home**: Hero section with animated mockups and feature highlights
- **Features**: Detailed feature showcase with animations
- **Pricing**: Free vs Premium plans with Stripe integration ready
- **Coming Soon**: Future feature previews

## 🎯 Animations

- Hero mockups float and fade in on load
- Feature icons bounce on hover
- Section headings slide in from viewport
- Pricing cards elevate on hover
- Smooth scrolling and sticky navigation

## 📄 License

This project is for demonstration purposes. Please ensure compliance with all applicable terms of service when scraping websites or automating outreach.

# LeadGen-Copilot

A Next.js application for business data collection and lead generation.

## Features

- Advanced data collection methods
- Comprehensive data extraction
- Website crawling capabilities
- Parallel and sequential processing
- Production-ready error handling
- Memory optimization
- CSV/JSON export options

## Tech Stack

- Next.js 14
- Puppeteer
- TypeScript
- Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env` file in the root directory and configure your environment variables.

## License

MIT