# PORTFOLIO 2020

## [Deploy](https://dzone.com/articles/how-to-deploy-an-angular-application-to-github)

```bash
# Add module
ng add angular-cli-ghpages

# Remove old source in Host-repo
cd ~/workspace/Portfolio2020;
rm -rf *.js *.html *.ico *.txt *.css assets;

# Deploy
cd ~/workspace/New-Portfolio;
ng build --prod --deploy-url https://dev-chloe.github.io/Portfolio2020;

# Copy new source to Host-repo
cd ~/workspace/New-Portfolio/dist/PORTFOLIO;
cp -R * ~/workspace/Portfolio2020;

# Push to Remote-Host-repo
cd ~/workspace/Portfolio2020;
git add .;
git commit -m "deploy `date '+%Y%m%d'`";
git push origin master;

# Back to Project Home
cd ~/workspace/New-Portfolio;
```