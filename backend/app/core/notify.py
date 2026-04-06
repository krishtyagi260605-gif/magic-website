import logging

# Configure logging for 'notifications'
logger = logging.getLogger("magic-studio-notifications")

def send_admin_notification(user_message: str, metadata: dict = None):
    """
    Simulates sending a notification to the owner (Krish Tyagi).
    In a real-world scenario, this would integrate with SendGrid, Twilio, or Amazon SNS.
    """
    notification_payload = {
        "to": "krishtyagi726@gmail.com",
        "subject": "New Magic Chat Query Detected",
        "body": f"Developer Alert: A new vision has been shared via Magic Chat.\n\nQuery: {user_message}\n\nMetadata: {metadata or {}}",
    }
    
    # Log the notification as a simulated send
    logger.info(f"NOTIFICATION_SENT: {notification_payload}")
    
    # Also print to console for immediate visibility during development
    print(f"\n--- MAGIC NOTIFICATION ---\n{notification_payload['body']}\n--------------------------\n")
    
    return True
