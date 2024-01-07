import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnalyticsComponent } from 'src/app/analytics/analytics.component';
import { DashboardComponent } from 'src/app/Component/dashboard.component';
import { LoginComponent } from 'src/app/Component/login.Component';
import { ShortLinkComponent } from 'src/app/Component/shortlink.component';
import { HomeComponent } from 'src/app/home/home.component';
export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={HomeComponent()}/>
        <Route path="/login" element={LoginComponent()}/>
        <Route path="/analytics" element={AnalyticsComponent()} />
        <Route path="/create-link" element={<ShortLinkComponent />} />
        <Route path="/link-details" element={<DashboardComponent/>} />
      </Routes>
    </Router>
  );
}
