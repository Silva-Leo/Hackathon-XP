import http.client
import json


def access_token():
    conn = http.client.HTTPSConnection("openapi.xpi.com.br")

    payload = "grant_type=client_credentials&client_id=2n17voMXDfPaVtv9PwsncTYcGGOmxKDCPMWtlKGaDNQMmzPj&client_secret" \
              "=itwWFpymUfZarGVBynUNGYXe0jAU8yklxCUH89hKwbeTKif5AwTsdAUttYSmHx8V "

    headers = {
        'Content-Type': "application/x-www-form-urlencoded",
        'Authorization': "Basic "
                         "Mm4xN3ZvTVhEZlBhVnR2OVB3c25jVFljR0dPbXhLRENQTVd0bEtHYUROUU1telBqOml0d1dGcHltVWZaYXJHVkJ5blVOR1lYZTBqQVU4eWtseENVSDg5aEt3YmVUS2lmNUF3VHNkQVV0dFlTbUh4OFY= "
    }

    conn.request("POST", "/oauth2/v1/access-token", payload, headers)

    res = conn.getresponse()
    data = res.read()

    str_json = data.decode("utf-8").replace("\n", "")

    token = json.loads(str_json)['access_token']

    dev = json.loads(str_json)['developer.email']

    return [dev, token]


def get_main(url):
    conn = http.client.HTTPSConnection("openapi.xpi.com.br")

    payload = ""

    headers = {
        'Content-type': "application/json",
        'Authorization': "Bearer " + str(access_token()[1])
    }

    conn.request("GET", url, payload, headers)

    res = conn.getresponse()
    data = res.read()

    return json.loads(data)


def get_bank():
    data = get_main("/openbanking/banks?limit")
    return data


def get_user():
    name = get_main("/openbanking/users?limi=")
    return name

