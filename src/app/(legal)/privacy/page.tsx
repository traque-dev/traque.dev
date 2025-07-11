import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';
import { Footer } from '@/common/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Traque',
  description: 'Privacy policy for Traque error tracking platform',
};

const privacyPolicyContent = `
# **Privacy Policy**

**Effective Date:** July 11, 2025  
**Last Updated:** July 11, 2025

## **1. Introduction**

Welcome to Traque, an error tracking service provided by Speekl, LLC ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").

By using our Service, you agree to the collection and use of information in accordance with this policy.

## **2. Contact Information**

**Company:** Speekl, LLC  
**Address:** 1111b South Governors Avenue, STE 7418, Dover, DE 19904, United States  
**Email:** dan@traque.dev  
**Website:** https://www.traque.dev/

## **3. Information We Collect**

### **3.1 Personal Information**
We collect the following personal information:
- **Name:** Your full name for account identification
- **Email Address:** For account creation, authentication, and communication

### **3.2 Project Information**
- **Project Name:** Names of your error tracking projects
- **Platform Information:** The technology platform your project uses (e.g., Node.js, React, Python)

### **3.3 Error and Crash Data**
When you integrate Traque into your applications, we collect:
- **Error Messages:** Complete error descriptions and messages
- **Stack Traces:** Technical details showing where errors occurred in your code
- **Timestamps:** When errors occurred
- **Error Severity:** Classification of error importance (critical, warning, info, etc.)
- **Error Frequency:** How often specific errors occur
- **Environment Information:** Whether errors occurred in development, staging, or production
- **Exception Metadata:** Additional technical details related to specific errors
- **Application State:** Context about your application when errors occurred

### **3.4 Authentication Information**
- **Google Account Information:** When you sign in with Google, we receive basic profile information (name and email) as provided by Google

## **4. How We Use Your Information**

We use the collected information for:
- **Account Management:** Creating and maintaining your user account
- **Service Provision:** Providing error tracking and monitoring services
- **Error Analysis:** Helping you identify, analyze, and resolve application errors
- **Communication:** Sending important service updates and notifications
- **Push Notifications:** Alerting you about critical errors (via Expo push notification service)
- **Service Improvement:** Enhancing our error tracking capabilities
- **Customer Support:** Responding to your questions and providing assistance

## **5. Information Sharing and Disclosure**

### **5.1 Current Sharing Practices**
We currently **do not** share, sell, or disclose your personal information to third parties, except as described below.

### **5.2 Service Providers**
We may share information with:
- **Google:** For authentication services when you use Google sign-in
- **Amazon Web Services (AWS):** For AWS WAF integration features
- **Expo:** For push notification delivery services

### **5.3 Legal Requirements**
We may disclose your information if required by law, court order, or government regulation.

### **5.4 Business Transfers**
In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.

## **6. Data Security**

We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.

## **7. Data Retention**

We retain your information until you choose to delete it. You can delete your data:
- **In-App:** Using the "Delete Data" feature within the Traque mobile application
- **Email Request:** By contacting us at dan@traque.dev

Once you request deletion, we will remove your data from our systems within a reasonable timeframe.

## **8. Your Rights and Choices**

You have the right to:
- **Access:** Request information about the data we have collected
- **Update:** Modify your personal information through the app
- **Delete:** Remove your account and associated data
- **Opt-out:** Disable push notifications through app settings
- **Data Portability:** Request a copy of your data in a portable format

## **9. Children's Privacy**

Our Service does not have specific age restrictions. However, we do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.

## **10. International Users**

Our Service is operated from the United States. If you are accessing our Service from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States.

## **11. Third-Party Integrations**

### **11.1 AWS WAF Integration**
When you use our AWS WAF integration, data may be processed through Amazon Web Services in accordance with AWS's privacy practices.

### **11.2 Google Authentication**
When you sign in with Google, your authentication is governed by Google's Privacy Policy in addition to this policy.

## **12. Data Breach Notification**

In the event of a data breach that affects your personal information, we will notify affected users via email within a reasonable timeframe after becoming aware of the breach.

## **13. Changes to This Privacy Policy**

We may update this Privacy Policy from time to time. We will notify you of any changes by:
- Posting the new Privacy Policy in the app
- Sending an email notification
- Updating the "Last Updated" date at the top of this policy

Your continued use of the Service after changes become effective constitutes acceptance of the updated policy.

## **14. Analytics and Tracking**

We currently do not use analytics services or tracking technologies. This policy will be updated if we implement such services in the future.

## **15. Contact Us**

If you have any questions about this Privacy Policy or our data practices, please contact us:

**Email:** dan@traque.dev  
**Address:** Speekl, LLC, 1111b South Governors Avenue, STE 7418, Dover, DE 19904, United States

## **16. Compliance**

This Privacy Policy is designed to comply with applicable privacy laws. As our Service grows and expands to new regions, we will update this policy to ensure continued compliance with relevant regulations.

---

**Note:** This Privacy Policy is effective as of the date listed above and applies to all information collected by Traque.
`;

export default function PrivacyPage() {
  return (
    <div>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-gray dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-100 max-w-none">
          <ReactMarkdown>{privacyPolicyContent}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </div>
  );
}
