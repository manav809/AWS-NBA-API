import json 
import csv
import boto3

def lambda_handler(event, context):
    region = 'ap-south-1'
    record_list = []
    
    try: 
        s3 = boto3.client('s3')
        dynamodb = boto3.client('dynamodb', region_name = region)
        
        bucket = event["Records"][0]["s3"]["bucket"]["name"]
        key = event["Records"][0]["s3"]["object"]["key"]
        
        print("Bucket:", bucket, "Key", key)
        
        csv_file = s3.get_object(Bucket = bucket, Key = key)
        
        record_list = csv_file['Body'].read().decode('utf-8').split("\n")
        
        csv_reader = csv_reader(record_list, delimiter=',', quotechar="'")
        
        for row in csv_reader:
            id = row[0]
            name = row[1]
            pos = row[2]
            age = row[3]
            team = row[4]
            games_played = row[5]
            games_started = row[6]
            minutes = row[7]
            field_goals = row[8]
            field_goals_attempts = row[9]
            field_goal_percentage = row[10]
            three_point_field_goals = row[11]
            