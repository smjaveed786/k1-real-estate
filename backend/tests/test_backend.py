import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

def test_api_root():
    r = requests.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert "K1" in r.json().get("message", "")

def test_post_contact():
    payload = {"name": "Test User", "mobile": "+91 9876543210", "requirement": "Looking for 3BHK"}
    r = requests.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert data.get("success") == True

def test_get_contacts():
    r = requests.get(f"{BASE_URL}/api/contacts")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    assert len(data) > 0
    # Verify the test submission is in results
    names = [c["name"] for c in data]
    assert "Test User" in names

def test_contact_missing_fields():
    r = requests.post(f"{BASE_URL}/api/contact", json={"name": "Only Name"})
    assert r.status_code == 422
